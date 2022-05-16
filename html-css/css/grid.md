# Grid

## Set up

- make an element the grid container:

```CSS
.container {
  display: grid;
  /* or */
  display: inline-grid;
}
```

## Columns and Rows

```CSS
grid-template-columns: 50px 50px;
grid-template-rows: 50px 50px;

/* shorthand */
grid-template: 50px 50px / 10px 50px;
```

## Explicit vs Implicit Grid

- Implicit grid concept: CSS Grid is able to automatically place grid items when we haven’t explicitly defined the layout for them
- When we use the `grid-template-columns` and `grid-template-rows` properties, we are explicitly defining grid tracks to lay out our grid items. But when the grid needs more tracks for extra content, it will implicitly define new grid tracks.
- We can also set implicit grid track sizes using the `grid-auto-columns` and `grid-auto-columns`.

```CSS
/* we want new rows to
stay the same value as
explicit row sizes,
we can do this*/

.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px;
  grid-auto-rows: 50px;
}

```

## Gap

```CSS
column-gap: 5px;
row-gap: 5px;
```

## Positioning

```CSS
grid-column-start:1;
grid-column-end:6;

/* shorthand */
grid-column: 1 / 6;

grid-row-start:1;
grid-row-end:3;

/* shorthand */
grid-row: 1 / 3;
```

## `grid-area`

- `grid-row-start / grid-column-start / grid-row-end / grid-column-end` can be combined into one line using `grid-area`.

```CSS
#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
```
