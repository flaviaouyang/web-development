# Positioning

## Static and relative positioning

- Static is the default positioning
- Relative is very similar to static, but properties like `top` will displace the element relative to its normal position

## Absolute positioning

- `position: absolute` allows you to position the element at an exact point on the screen without disturbing the other elements around it.
  - Good use case:
    - modals
    - image with a caption
    - icons on top of other elements
- `position: fixed` allows you to position the element relative to the viewport. This means that element will stay there as user scrolls.

## Sticky positioning

- Behaves like a normal position until scrolled past. Then it will behave like a fixed element.
