Using var() (CSS custom properties) and SCSS variables both offer ways to manage reusable values, but they serve slightly different purposes and have different use cases.
Differences Between var() and SCSS Variables:

    Scope and Runtime Behavior:

        SCSS Variables ($variable):
            Are compiled at build time.
            Exist only in the context of the preprocessed code and are not present in the final CSS.
            Once SCSS is compiled, you cannot change their values dynamically without re-compiling the SCSS.

        CSS Custom Properties (var()):
            Are available at runtime in the browser.
            Can be manipulated using JavaScript or adjusted based on CSS rules (e.g., within different media queries).
            Maintain their presence in the final CSS, allowing for dynamic changes like theming and user interaction.

    Dynamic Updates:

        CSS Variables can change on the fly based on user actions or conditions without reloading or re-compiling the page.

    SCSS Variables cannot be modified after the CSS is generated, making them static and suitable for values that don’t change.

Use Cases:

    SCSS Variables are great for design tokens during development (e.g., colors, sizes, and breakpoints) where you need to perform calculations or set nested structures.
    CSS Variables are ideal for theming and runtime updates, as they can be controlled via JavaScript or changed depending on different states.


    sass:Uses a clean, minimal syntax without braces ({}) or semicolons (;).
    scss: Uses braces ({}) and semicolons (;), similar to standard CSS.

    Sass: Does not allow standard CSS code to be used directly within it. You must follow its syntax rules, which are stricter.
SCSS: Fully supports CSS, so you can copy and paste regular CSS into an SCSS file without modification. This feature makes it easier for teams transitioning from CSS.

both sytax: Variables
Nesting
Mixins
Functions
Partials and imports

