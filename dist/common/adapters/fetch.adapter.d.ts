import { HttpAdapter } from '../interfaces';
export declare class FetchAdapter implements HttpAdapter {
    get<T>(url: string): Promise<T>;
}
