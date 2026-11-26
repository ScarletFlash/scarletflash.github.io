type TupleOf<T, L extends number, R extends unknown[]> = R['length'] extends L ? R : TupleOf<T, L, [T, ...R]>;

export type TupleOfLength<T, L extends number> = L extends L ? (number extends L ? T[] : TupleOf<T, L, []>) : never;
