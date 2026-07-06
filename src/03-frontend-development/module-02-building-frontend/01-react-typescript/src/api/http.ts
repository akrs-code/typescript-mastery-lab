import type { AxiosRequestConfig } from "axios";
import { z } from "zod";
import type { ZodTypeAny } from "zod";
import { api } from "./axiosClient";
export async function getJsonAxios<T extends ZodTypeAny>(
    path: string,
    schema: T,
    config?: AxiosRequestConfig
): Promise<z.infer<T>> {
    
    // Axios automatically throws an error if status is not 2xx
    const res = await api.get(path, config);

    // Axios automatically parses JSON payloads into res.data as 'unknown' natively
    const rawData: unknown = res.data;
    
    // Runtime data structure verification via Zod
    const parsed = schema.safeParse(rawData);
    
    if (!parsed.success) {
        const details = parsed.error.issues
            .map(i => `${i.path.join(".") || "(root)"}: ${i.message}`)
            .join("; ");
            
        throw new Error(`Invalid response shape from ${path}: ${details}`);
    }

    return parsed.data;
}