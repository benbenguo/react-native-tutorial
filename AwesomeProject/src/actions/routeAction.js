/**
 * @flow
 */
export function pushOrPopToRoute(route) {
  return {
    type: 'PUSH_OR_POP_TO_ROUTE',
    route,
  }
}

export function popRoute(route) {
  return {
    type: 'POP_ROUTE',
  }
}
