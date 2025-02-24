const createEnum = <T extends string>(...values: T[]) => {
    return values.reduce(
      (acc, value) => {
        acc[value] = value;
        return acc;
      },
      {} as Record<T, T>,
    );
  };

export { createEnum };