# Angular Material Playground

Open this repo in Stackblitz at [https://stackblitz.com/github/UIUXEngineering/stackblitz-configure-angular-material-components?file=src%2Fstyles.scss](https://stackblitz.com/github/UIUXEngineering/stackblitz-configure-angular-material-components?file=src%2Fstyles.scss)

Open the file `src/styles.scss` to configure Angular Material's Typography and themes.

## Typography

Material's default typography configuration is as follows:

```scss

$material-default-typography: mat-typography-config(
  $font-family:   'Roboto, "Helvetica Neue", sans-serif',
  $display-4:     mat-typography-level(112px, 112px, 300, $letter-spacing: -0.05em),
  $display-3:     mat-typography-level(56px, 56px, 400, $letter-spacing: -0.02em),
  $display-2:     mat-typography-level(45px, 48px, 400, $letter-spacing: -0.005em),
  $display-1:     mat-typography-level(34px, 40px, 400),
  $headline:      mat-typography-level(24px, 32px, 400),
  $title:         mat-typography-level(20px, 32px, 500),
  $subheading-2:  mat-typography-level(16px, 28px, 400),
  $subheading-1:  mat-typography-level(15px, 24px, 400),
  $body-2:        mat-typography-level(14px, 24px, 500),
  $body-1:        mat-typography-level(14px, 20px, 400),
  $caption:       mat-typography-level(12px, 20px, 400),
  $button:        mat-typography-level(14px, 14px, 500),
    // Line-height must be unit-less fraction of the font-size.
  $input:         mat-typography-level(inherit, 1.125, 400)
);


@include mat-core($material-default-typography);
```

To try a version in `rem` instead of `px`, try:

```scss

$rem-typography: mat-typography-config(
  $font-family: '-apple-system, Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetic Neue", sans-serif',
  $display-4: mat-typography-level(7rem, 7rem, 300, $letter-spacing: -0.05em),
  $display-3: mat-typography-level(3.5rem, 3.5rem, 400, $letter-spacing: -0.02em),
  $display-2: mat-typography-level(2.8125rem, 3rem, 400, $letter-spacing: -0.005em),
  $display-1: mat-typography-level(2.125rem, 2.5rem, 400),
  $headline: mat-typography-level(1.5rem, 2rem, 400),
  $title: mat-typography-level(1.25rem, 2rem, 500),
  $subheading-2: mat-typography-level(1rem, 1.75rem, 400),
  $subheading-1: mat-typography-level(0.9375rem, 1.5rem, 400),
  $body-2: mat-typography-level(0.875rem, 1.5, 500),
  $body-1: mat-typography-level(0.875rem, 1.5, 400),
  $caption: mat-typography-level(0.75rem, 1.25rem, 400),
  $button: mat-typography-level(0.875rem, 0.875rem, 500),
  // Line-height must be unit-less fraction of the font-size. $input: mat-typography-level(inherit, 1.125, 400),
  $input: mat-typography-level(inherit, 1.125, 400),
);


@include mat-core($rem-typography);

```

## Play with Material Typography

Change the values of the Typography config... see what changes.


## Colors

Find available material colors [here](https://github.com/angular/components/blob/master/src/material/core/theming/_palette.scss#L39);

Update the theme colors in the same `src/styles.scss` file.

```scss
 $config-angular-material-theme-components-primary: mat-palette($mat-indigo);
```

## Contributions
PR's Welcome!

