import apiClient from '@/api/client';

import type { ExampleResponse, PaginatedExample, UpdateExamplePayload } from '@/types/example.type';

export const exampleApi = {
  getExample: async (): Promise<ExampleResponse> => {
    const { data } = await apiClient.get<ExampleResponse>('/example');
    return data;
  },

  updateExample: async (_payload: UpdateExamplePayload): Promise<ExampleResponse> => {
    const { data } = await apiClient.patch<ExampleResponse>('/example', _payload);
    return data;
  },

  getExamples: async (_page: number): Promise<PaginatedExample> => {
    const { data } = await apiClient.get<PaginatedExample>('/examples');
    return data;
  },
};
