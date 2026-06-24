export type ExampleResponse = {
  // id: string;
  // name: string;
};

export type UpdateExamplePayload = {
  // name?: string;
};

export type PaginatedExample = {
  // items: ExampleResponse[];
  pagination: {
    page: number;
    total_pages: number;
  };
};
