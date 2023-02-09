import { HttpAdapter } from '../interfaces';
export declare class AxiosAdapter implements HttpAdapter {
    private axios;
    get<T>(url: string): Promise<T>;
}
