export type ArrayItem<T, K extends string> = T & {
  [key in K]?: ArrayItem<T, K>[]
}