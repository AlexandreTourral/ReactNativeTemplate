import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { exampleApi } from '@/api/example.api';
import type { ExampleResponse, UpdateExamplePayload } from '@/types/example.type';

export const EXAMPLE_QUERY_KEY = 'example';

export function useExampleQuery() {
  return useQuery<ExampleResponse>({
    queryKey: [EXAMPLE_QUERY_KEY],
    queryFn: () => exampleApi.getExample(),
  });
}

export function useUpdateExampleMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateExamplePayload) => exampleApi.updateExample(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EXAMPLE_QUERY_KEY] });
    },
  });
}

export function useExamplesInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: [EXAMPLE_QUERY_KEY, 'infinite'],
    queryFn: ({ pageParam }) => exampleApi.getExamples(pageParam as number),
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.pagination;
      return page < total_pages ? page + 1 : undefined;
    },
    initialPageParam: 1,
  });
}
