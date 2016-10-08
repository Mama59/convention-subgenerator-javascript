module.exports =
[
  {
    "type": "list",
    "name": "env",
    "message": "Is it a project that run on a browser or node ?",
    "choices": [
      "browser",
      "node"
    ]
  },
  {
    "type": "list",
    "name": "test",
    "message": "What test do you use ?",
    "choices": [
      "jasmine",
      "mocha"
    ]
  },
  {
    "type": "confirm",
    "name": "jquery",
    "message": "Do you use jquery?"
  },
  {
    "type": "input",
    "name": "globals",
    "message": "Which global variables do you want to use ? (eg: angular, jquery, _, ...)"
  },
  {
    "type": "list",
    "name": "strict",
    "message": "Do you want to require or disallow strict mode directives ? (http://eslint.org/docs/rules/strict)",
    "choices": [
      "safe",
      "global",
      "function",
      "never"
    ]
  },
  {
  	"type": "confirm",
  	"name": "prefer_const",
  	"message": "Do you want to  This rule is aimed at flagging variables that are declared using let keyword, but never reassigned after the initial assignment. (http://eslint.org/docs/rules/prefer-const)"
  },
  {
  	"type": "confirm",
  	"name": "no_var",
  	"message": "Do you want to  require let or const instead of var (off by default) (http://eslint.org/docs/rules/no-var)"
  },
  {
  	"type": "confirm",
  	"name": "no_new_object",
  	"message": "Do you want to  disallow use of the Object constructor (http://eslint.org/docs/rules/no-new-object)"
  },
  {
  	"type": "list",
  	"name": "object_shorthand",
  	"message": "Do you want to  This syntax can make defining complex object literals much cleaner. (http://eslint.org/docs/rules/object-shorthand)",
    "choices": [
      "always",
      "methods",
      "properties",
      "never",
      "consistent",
      "consistent-as-needed"
    ]
  },
  {
  	"type": "list",
  	"name": "quote_props",
  	"message": "Do you want to  disallow reserved words being used as object literal keys (off by default) (http://eslint.org/docs/rules/quote-props)",
    "choices" : [
      "always",
      "as-needed",
      "consistent",
      "consistent-as-needed",
      "keywords",
      "unnecessary",
      "unnecessary",
      "numbers"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_obj_calls",
  	"message": "Do you want to  disallow the use of object properties of the global object (Math and JSON) as functions (http://eslint.org/docs/rules/no-obj-calls)"
  },
  {
  	"type": "confirm",
  	"name": "no_global_assign",
  	"message": "Do you want to  disallow reassignments of native objects (http://eslint.org/docs/rules/no-global-assign)"
  },
  {
  	"type": "checkbox",
  	"name": "key_spacing",
  	"message": "Do you want to  enforces spacing between keys and values in object literal properties (http://eslint.org/docs/rules/key-spacing)",
    "choices" : [
      "beforeColon",
      "afterColon",
      "mode",
      "align",
      "singleLine",
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_dupe_keys",
  	"message": "Do you want to  disallow duplicate keys when creating object literals (http://eslint.org/docs/rules/no-dupe-keys)"
  },
  {
  	"type": "confirm",
  	"name": "no_sparse_arrays",
  	"message": "Do you want to  disallow sparse arrays (http://eslint.org/docs/rules/no-sparse-arrays)"
  },
  {
  	"type": "confirm",
  	"name": "no_array_constructor",
  	"message": "Do you want to  disallow use of the Array constructor (http://eslint.org/docs/rules/no-array-constructor)"
  },
  {
  	"type": "confirm",
  	"name": "array_callback_return",
  	"message": "Do you want to   Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single statement following 8.2 (http://eslint.org/docs/rules/array-callback-return)"
  },
  {
  	"type": "list",
  	"name": "array_bracket_spacing",
  	"message": "Do you want to  require or disallow spaces inside brackets (off by default) (http://eslint.org/docs/rules/object-curly-array-bracket-spacing)",
    "choices" : [
      "never",
      "always"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_invalid_regexp",
  	"message": "Do you want to  disallow invalid regular expression strings in the RegExp constructor (http://eslint.org/docs/rules/no-invalid-regexp)"
  },
  {
  	"type": "checkbox",
  	"name": "no_irregular_whitespace",
  	"message": "Do you want to  disallow irregular whitespace outside of strings and comments (http://eslint.org/docs/rules/no-irregular-whitespace)",
    "choices" : [
      "skipStrings",
      "skipComments",
      "skipRegExps",
      "skipTemplates"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "quotes",
  	"message": "Do you want to  specify whether double or single quotes should be used (http://eslint.org/docs/rules/quotes)",
    "choices" : [
      {
        "name": "string",
        "type": "list",
        "choices": [
          "double",
          "single",
          "backtick"
        ],
        "message": "String options"
      },
      {
        "name": "object",
        "type": "checkbox",
        "choices": [
          "avoidEscape",
          "allowTemplateLiterals"
        ],
        "message": "Object options"
      }
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_func_assign",
  	"message": "Do you want to  disallow overwriting functions written as function declarations (http://eslint.org/docs/rules/no-func-assign)"
  },
  {
  	"type": "list",
  	"name": "no_inner_declarations",
  	"message": "Do you want to  disallow function or variable declarations in nested blocks (http://eslint.org/docs/rules/no-inner-declarations)",
    "choices": [
      "functions",
      "both"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_loop_func",
  	"message": "Do you want to  disallow creation of functions within loops (http://eslint.org/docs/rules/no-loop-func)"
  },
  {
  	"type": "confirm",
  	"name": "no_extra_bind",
  	"message": "Do you want to  disallow unnecessary function binding (http://eslint.org/docs/rules/no-extra-bind)"
  },
  {
  	"type": "list",
  	"name": "wrap_iife",
  	"message": "Do you want to  require immediate function invocation to be wrapped in parentheses (off by default) (http://eslint.org/docs/rules/wrap-iife)",
    "choices": [
      "outside",
      "inside",
      "any"
    ]
  },
  {
  	"type": "list",
  	"name": "func_names",
  	"message": "Do you want to  require function expressions to have a name (off by default) (http://eslint.org/docs/rules/func-names)",
    "choices": [
      "always",
      "never"
    ]
  },
  {
  	"type": "list",
  	"name": "func_style",
  	"message": "Do you want to  enforces use of function declarations or expressions (off by default) (http://eslint.org/docs/rules/func-style)",
    "choices": [
      "expression",
      "declaration",
      "allowArrowFunctions"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_new_require",
  	"message": "Do you want to  disallow use of new operator with the require function (off by default) (on by default in the node environment) (http://eslint.org/docs/rules/no-new-require)"
  },
  {
  	"type": "list",
  	"name": "func_call_spacing",
  	"message": "Do you want to  disallow space between function identifier and application (http://eslint.org/docs/rules/func-call-spacing)",
    "choices": [
      "never",
      "always"
    ]
  },
  {
  	"type": "confirm",
  	"name": "prefer_rest_params",
  	"message": "Do you want to  Never use arguments, opt to use rest syntax ... instead (http://eslint.org/docs/rules/prefer-rest-params)"
  },
  {
  	"type": "confirm",
  	"name": "no_new_func",
  	"message": "Do you want to  disallow use of new operator for Function object (http://eslint.org/docs/rules/no-new-func)"
  },
  {
  	"type": "confirm",
  	"name": "no_param_reassign",
  	"message": "Do you want to  Never mutate parameters, Never reassign parameters (http://eslint.org/docs/rules/no-param-reassign)"
  },
  {
  	"type": "confirm",
  	"name": "prefer_spread",
  	"message": "Do you want to  Prefer the use of the spread operator ... to call variadic functions (http://eslint.org/docs/rules/prefer-spread)"
  },
  {
  	"type": "checkbox",
  	"name": "prefer_arrow_callback",
  	"message": "Do you want to  When you must use function expressions (as when passing an anonymous function), use arrow function notation. (http://eslint.org/docs/rules/prefer-arrow-callback)",
    "choices": [
      "allowUnboundThis",
      "allowNamedFunctions"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "arrow_spacing",
  	"message": "Do you want to  This rule normalize style of spacing before/after an arrow function’s arrow(=>) (http://eslint.org/docs/rules/arrow-spacing)",
    "choices": [
      "before",
      "after"
    ]
  },
  {
  	"type": "list",
  	"name": "arrow_parens",
  	"message": "Do you want to  Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must be wrapped in parentheses. This rule enforces the consistent use of parentheses in arrow functions. (http://eslint.org/docs/rules/arrow-parens)",
    "choices": [
      "always",
      "as-needed"
    ]
  },
  {
  	"type": "confirm",
  	"name": "arrow_body_style",
  	"message": "Do you want to  Arrow functions have two syntactic forms for their function bodies. They may be defined with a block body (denoted by curly braces) () => { ... } or with a single expression () => ..., whose value is implicitly returned. (http://eslint.org/docs/rules/arrow-body-style)",
    "choices": [
      "always",
      "as-needed",
      "never"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "no_confusing_arrow",
  	"message": "Do you want to  Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=). (http://eslint.org/docs/rules/no-confusing-arrow)",
    "choices": [
      {
        "name": "allowParens",
        "type": "confirm",
        "message": "true relaxes the rule and accepts parenthesis as a valid 'confusion-preventing' syntax. false warns even if the expression is wrapped in parenthesis"
      },
      {

      }
    ]
  },
  {
  	"type": "confirm",
  	"name": "new_parens",
  	"message": "Do you want to  disallow the omission of parentheses when invoking a constructor with no arguments (http://eslint.org/docs/rules/new-parens)"
  },
  {
  	"type": "confirm",
  	"name": "no_useless_constructor",
  	"message": "Do you want to  Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. (http://eslint.org/docs/rules/no-useless-constructor)"
  },
  {
  	"type": "confirm",
  	"name": "no_dupe_class_members",
  	"message": "Do you want to   Avoid duplicate class members. (http://eslint.org/docs/rules/no-dupe-class-members)"
  },
  {
  	"type": "list-depth",
  	"name": "no_duplicate_imports",
  	"message": "Do you want to  Only import from a path in one place (http://eslint.org/docs/rules/no-duplicate-imports)",
    "choices": [
      {
        "name": "includeExports",
        "type": "confirm",
        "message": "If re-exporting from an imported module, you should add the imports to the import-statement, and export that directly, not use export ... from."
      }
    ]
  },
  {
      "type": "input",
      "name": "no_restricted_modules",
      "message": "Which restrict usage of specified node modules do you want to use ? (ex:  assert,buffer,child_process,cluster) (http://eslint.org/docs/rules/no-restricted-modules)"
  },
  {
  	"type": "confirm",
  	"name": "no_iterator",
  	"message": "Do you want to  disallow usage of __iterator__ property (http://eslint.org/docs/rules/no-iterator)"
  },
  {
  	"type": "checkox",
  	"name": "generator_star_spacing",
  	"message": "Do you want to  enforce the position of the * in generator functions (off by default) (http://eslint.org/docs/rules/generator-star-spacing)",
    "choices": [
      "before",
      "after"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "dot_notation",
  	"message": "Do you want to  encourages use of dot notation whenever possible (http://eslint.org/docs/rules/dot-notation)",
    "choices": [
      {
        "name": "allowKeywords",
        "type": "confirm",
        "message": "Set the allowKeywords option to false (default is true) to follow ECMAScript version 3 compatible style, avoiding dot notation for reserved word properties."
      },
      {
        "name": "allowPattern",
        "type": "input",
        "message": "Set the allowPattern option to a regular expression string to allow bracket notation for property names that match a pattern (by default, no pattern is tested)"
      }
    ]
  },
  {
  	"type": "confirm",
  	"name": "vars_on_top",
  	"message": "Do you want to  requires to declare all vars on top of their containing scope (off by default) (http://eslint.org/docs/rules/vars-on-top)"
  },
  {
  	"type": "confirm",
  	"name": "no_catch_shadow",
  	"message": "Do you want to  disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment) (http://eslint.org/docs/rules/no-catch-shadow)"
  },
  {
  	"type": "confirm",
  	"name": "no_delete_var",
  	"message": "Do you want to  disallow deletion of variables (http://eslint.org/docs/rules/no-delete-var)"
  },
  {
  	"type": "confirm",
  	"name": "no_label_var",
  	"message": "Do you want to  disallow labels that share a name with a variable (http://eslint.org/docs/rules/no-label-var)"
  },
  {
  	"type": "list-depth",
  	"name": "no_shadow",
  	"message": "Do you want to  disallow declaration of variables already declared in the outer scope (http://eslint.org/docs/rules/no-shadow)",
    "choices": [
      {
        "name": "builtinGlobals",
        "type": "confirm",
        "message": ""
      },
      {
        "name": "hoist",
        "type": "list",
        "message": "The hoist option has three settings:    functions (by default) - reports shadowing before the outer functions are defined. all - reports all shadowing before the outer variables/functions are defined.    never - never report shadowing before the outer variables/functions are defined.",
        "choices": [
          "functions",
          "all",
          "never"
        ]
      },
      {
        "name": "allow",
        "type": "input",
        "message": "The allow option is an array of identifier names for which shadowing is allowed. For example, resolve, reject, done, cb.",
      }
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_shadow_restricted_names",
  	"message": "Do you want to  disallow shadowing of names such as arguments (http://eslint.org/docs/rules/no-shadow-restricted-names)"
  },
  {
  	"type": "confirm",
  	"name": "no_undef_init",
  	"message": "Do you want to  disallow use of undefined when initializing variables (http://eslint.org/docs/rules/no-undef-init)"
  },
  {
  	"type": "confirm",
  	"name": "no_undefined",
  	"message": "Do you want to  disallow use of undefined variable (off by default) (http://eslint.org/docs/rules/no-undefined)"
  },
  {
  	"type": "list-depth",
  	"name": "no_unused_vars",
  	"message": "Do you want to  disallow declaration of variables that are not used in the code (http://eslint.org/docs/rules/no-unused-vars)",
    "choices": [
      {
        "name": "vars",
        "type": "list",
        "choices": [
          "all",
          "local"
        ],
        "message": "The vars option has two settings:   all checks all variables for usage, including those in the global scope. This is the default setting.    local checks only that locally-declared variables are used but will allow global variables to be unused."
      },
      {
        "name": "args",
        "type": "list",
        "choices": [
          "after-used",
          "all",
          "none"
        ],
        "message": "The args option has three settings:    after-used - only the last argument must be used. This allows you, for instance, to have two named parameters to a function and as long as you use the second argument, ESLint will not warn you about the first. This is the default setting.    all - all named arguments must be used.    none - do not check arguments."
      }
    ]
  },
  {
  	"type": "checkbox",
  	"name": "no_use_before_define",
  	"message": "Do you want to  disallow use of class or functions before they are defined (http://eslint.org/docs/rules/no-use-before-define)",
    "choices": [
      "functions",
      "classes"
    ]
  },
  {
  	"type": "list",
  	"name": "one_var",
  	"message": "Do you want to  allow just one var statement per function (off by default) (http://eslint.org/docs/rules/one-var)",
    "choices": [
      "always",
      "never"
    ]
  },
  {
  	"type": "confirm",
  	"name": "block_scoped_var",
  	"message": "Do you want to  treat var statements as if they were block scoped (off by default) (http://eslint.org/docs/rules/block-scoped-var)"
  },
  {
  	"type": "confirm",
  	"name": "no_octal_escape",
  	"message": "Do you want to  disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251'; (http://eslint.org/docs/rules/no-octal-escape)"
  },
  {
  	"type": "checkbox",
  	"name": "no_mixed_requires",
  	"message": "Do you want to  disallow mixing regular variable and require declarations (off by default) (on by default in the node environment) (http://eslint.org/docs/rules/no-mixed-requires)",
    "choices": [
      "grouping",
      "allowCall"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_redeclare",
  	"message": "Do you want to  disallow declaring the same variable more then once (http://eslint.org/docs/rules/no-redeclare)"
  },
  {
  	"type": "checkbox",
  	"name": "sort_vars",
  	"message": "Do you want to  sort variables within the same declaration block (off by default) (http://eslint.org/docs/rules/sort-vars)",
    "choices": [
      "ignoreCase"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "no_plusplus",
  	"message": "Do you want to  disallow use of unary operators, ++ and -- (off by default) (http://eslint.org/docs/rules/no-plusplus)",
    "choices":[
      "allowForLoopAfterthoughts"
    ]
  },
  {
  	"type": "list",
  	"name": "eqeqeq",
  	"message": "Do you want to  require the use of === and !== (http://eslint.org/docs/rules/eqeqeq)",
    "choices": [
      "always",
      "smart"
    ]

  },
  {
  	"type": "confirm",
  	"name": "no_nested_ternary",
  	"message": "Do you want to  disallow nested ternary expressions (off by default) (http://eslint.org/docs/rules/no-nested-ternary)"
  },
  {
  	"type": "confirm",
  	"name": "no_case_declarations",
  	"message": "Do you want to   This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses. (http://eslint.org/docs/rules/no-case-declarations)"
  },
  {
  	"type": "checbox",
  	"name": "no_unneeded_ternary",
  	"message": "Do you want to  Avoid unneeded ternary statements (http://eslint.org/docs/rules/no-unneeded-ternary)",
    "choices": [
      "defaultAssignment"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "no_unsafe_negation",
  	"message": "Do you want to  disallow negation of the left operand of an in expression (http://eslint.org/docs/rules/no-unsafe-negation)",
    "choices": [
      "defaultAssignment"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_div_regex",
  	"message": "Do you want to  disallow division operators explicitly at beginning of regular expression (off by default) (http://eslint.org/docs/rules/no-div-regex)"
  },
  {
  	"type": "confirm",
  	"name": "no_ternary",
  	"message": "Do you want to  disallow the use of ternary operators (off by default) (http://eslint.org/docs/rules/no-ternary)"
  },
  {
  	"type": "confirm",
  	"name": "use_isnan",
  	"message": "Do you want to  disallow comparisons with the value NaN (http://eslint.org/docs/rules/use-isnan)"
  },
  {
  	"type": "confirm",
  	"name": "no_extra_boolean_cast",
  	"message": "Do you want to  disallow double-negation boolean casts in a boolean context (http://eslint.org/docs/rules/no-extra-boolean-cast)"
  },
  {
  	"type": "confirm",
  	"name": "no_eq_null",
  	"message": "Do you want to  disallow comparisons to null without a type-checking operator (off by default) (http://eslint.org/docs/rules/no-eq-null)"
  },
  {
  	"type": "confirm",
  	"name": "no_self_compare",
  	"message": "Do you want to  disallow comparisons where both sides are exactly the same (off by default) (http://eslint.org/docs/rules/no-self-compare)"
  },
  {
  	"type": "confirm",
  	"name": "no_new",
  	"message": "Do you want to  disallow use of new operator when not part of the assignment or comparison (no-new)"
  },
  {
  	"type": "confirm",
  	"name": "no_void",
  	"message": "Do you want to  disallow use of void operator (off by default) (http://eslint.org/docs/rules/no-void)"
  },
  {
  	"type": "list",
  	"name": "operator_assignment",
  	"message": "Do you want to  require assignment operator shorthand where possible or prohibit it entirely (off by default) (http://eslint.org/docs/rules/operator-assignment)",
    "choices": [
      "always",
      "never"
    ]
  },
  {
  	"type": "list",
  	"name": "brace_style",
  	"message": "Do you want to  enforce one true brace style (off by default) (http://eslint.org/docs/rules/brace-style)",
    "choices": [
      "1tbs",
      "stroustrup",
      "allman"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_ex_assign",
  	"message": "Do you want to  disallow assigning to the exception in a catch block (http://eslint.org/docs/rules/no-ex-assign)"
  },
  {
  	"type": "list",
  	"name": "curly",
  	"message": "Do you want to  specify curly brace conventions for all control statements (http://eslint.org/docs/rules/curly)",
    "choices": [
      "all",
      "multi",
      "multi-line",
      "multi-or-nest"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_lone_blocks",
  	"message": "Do you want to  disallow unnecessary nested blocks (http://eslint.org/docs/rules/no-lone-blocks)"
  },
  {
  	"type": "list-depth",
  	"name": "padded_blocks",
  	"message": "Do you want to  enforce padding within blocks (off by default) (http://eslint.org/docs/rules/padded-blocks)",
    "choices": [
      {
        "type": "list",
        "name": "string",
        "choices": [
          "always",
          "never"
        ],
        "message": "String options"
      },
      {
        "type": "list",
         "name": "object",
         "choices": [
            "blocks",
            "classes",
            "switches"
          ],
          "message": "Object options"
      }
    ]
  },
  {
  	"type": "input",
  	"name": "max_depth",
    "number": true,
  	"message": "Do you want to  specify the maximum depth that blocks can be nested (off by default) (set a number) (http://eslint.org/docs/rules/max-depth)"
  },
  {
  	"type": "confirm",
  	"name": "no_lonely_if",
  	"message": "Do you want to  disallow if as the only statement in an else block (off by default) (http://eslint.org/docs/rules/no-lonely-if)"
  },
  {
  	"type": "confirm",
  	"name": "no_inline_comments",
  	"message": "Do you want to  disallow comments inline after code (off by default) (http://eslint.org/docs/rules/no-inline-comments)"
  },
  {
  	"type": "confirm",
  	"name": "no_mixed_spaces_and_tabs",
  	"message": "Do you want to  disallow mixed spaces and tabs for indentation (http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)"
  },
  {
  	"type": "list",
  	"name": "indent",
  	"message": "Do you want to indent, tab, 2 spaces or 4 spaces. (http://eslint.org/docs/rules/indent)",
    "choices": [
      "tab",
      "2",
      "4"
    ]
  },
  {
  	"type": "checkox",
  	"name": "space_before_blocks",
  	"message": "Do you want to  require or disallow space before blocks (off by default) (http://eslint.org/docs/rules/space-before-blocks)",
    "choices": [
      "functions",
      "keywords",
      "classes"
    ]
  },
  {
  	"type": "list",
  	"name": "space_before_function_paren",
  	"message": "Do you want to  require a space after function names (off by default) (http://eslint.org/docs/rules/space-before-function-paren)",
    "choices": [
      "always",
      "never"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_regex_spaces",
  	"message": "Do you want to  disallow multiple spaces in a regular expression literal (http://eslint.org/docs/rules/no-regex-spaces)"
  },
  {
  	"type": "confirm",
  	"name": "no_multi_spaces",
  	"message": "Do you want to  disallow use of multiple spaces (http://eslint.org/docs/rules/no-multi-spaces)"
  },
  {
  	"type": "list",
  	"name": "space_in_parens",
  	"message": "Do you want to  require or disallow spaces inside parentheses (off by default) (http://eslint.org/docs/rules/space-in-parens)",
    "choices": [
      "always",
      "never"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "space_unary_ops",
  	"message": "Do you want to  Require or disallow spaces before/after unary operators (words on by default, nonwords off by default) (http://eslint.org/docs/rules/space-unary-ops)",
    "choices": [
      {
        "name" : "words",
        "type": "confirm",
        "message": ""
      },
      {
        "name" : "nonwords",
        "type": "confirm",
        "message": ""
      },
      {
        "name": "overrides",
        "type": "checbox",
        "message": "",
        "choices": [
          "new",
          "delete",
          "typeof",
          "void",
          "yield",
          "+",
          "++",
          "-",
          "--",
          "!",
          "!!"
        ]
      }
    ]
  },
  {
  	"type": "checkbox",
  	"name": "space_infix_ops",
  	"message": "Do you want to  require spaces around operators (http://eslint.org/docs/rules/space-infix-ops)",
    "choices": [
      "int32Hint"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "semi_spacing",
  	"message": "Do you want to  disallow space before semicolon (http://eslint.org/docs/rules/semi-spacing)",
    "choices": [
      "before",
      "after"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "keyword_spacing",
  	"message": "Do you want to  require a space after certain keywords (off by default) (http://eslint.org/docs/rules/keyword-spacing)",
    "choices": [
      "before",
      "after"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "no_trailing_spaces",
  	"message": "Do you want to  disallow trailing whitespace at the end of lines (http://eslint.org/docs/rules/no-trailing-spaces)",
    "choices": [
      "skipBlankLines"
    ]
  },
  {
  	"type": "list",
  	"name": "eol_last",
  	"message": "Do you want to  enforce newline at the end of file, with no multiple empty lines (http://eslint.org/docs/rules/eol-last)",
    "choices": [
      "always",
      "never",
      "unix",
      "windows"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "max_len",
  	"message": "Do you want to  specify the maximum length of a line in your program (off by default) (http://eslint.org/docs/rules/max-len)",
    "choices": [
      {
        "name" : "code",
        "type": "input",
        "number": true,
        "message": "(default 80) enforces a maximum line length"
      },
      {
        "name" : "tabWidth",
        "type": "input",
        "number": true,
        "message": "(default 4) specifies the character width for tab characters"
      },
      {
        "name" : "comments",
        "type": "input",
        "number": true,
        "message": "enforces a maximum line length for comments; defaults to value of code"
      },
      {
        "name" : "ignorePattern",
        "type": "confirm",
        "message": "ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON"
      },
      {
        "name" : "ignoreComments",
        "type": "confirm",
        "message": "ignores all trailing comments and comments on their own line"
      },
      {
        "name" : "ignoreTrailingComments",
        "type": "confirm",
        "message": "ignores only trailing comments"
      },
      {
        "name" : "ignoreUrls",
        "type": "confirm",
        "message": "ignores lines that contain a URL"
      },
      {
        "name" : "ignoreStrings",
        "type": "confirm",
        "message": "ignores lines that contain a double-quoted or single-quoted string"
      },
      {
        "name" : "ignoreTemplateLiterals",
        "type": "confirm",
        "message": "ignores lines that contain a template literal"
      }
    ]
  },
  {
  	"type": "list",
  	"name": "comma_style",
  	"message": "Do you want to  enforce one true comma style (off by default) (http://eslint.org/docs/rules/comma-style)",
    "choices": [
      "last",
      "first"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_sequences",
  	"message": "Do you want to  disallow use of comma operator (http://eslint.org/docs/rules/no-sequences)"
  },
  {
  	"type": "confirm",
  	"name": "comma_spacing",
  	"message": "Do you want to  enforce spacing before and after comma (http://eslint.org/docs/rules/comma-spacing)"
  },
  {
  	"type": "list",
  	"name": "comma_dangle",
  	"message": "Do you want to  disallow trailing commas in object literals (http://eslint.org/docs/rules/comma-dangle)",
    "choices": [
      "never",
      "always",
      "always-multiline",
      "only-multiline"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_extra_semi",
  	"message": "Do you want to  disallow unnecessary (http://eslint.org/docs/rules/no-extra-semi)"
  },
  {
  	"type": "confirm",
  	"name": "semi",
  	"message": "Do you want to  require or disallow use of semicolons instead of ASI (http://eslint.org/docs/rules/semi)"
  },
  {
  	"type": "confirm",
  	"name": "camelcase",
  	"message": "Do you want to  require camel case names (http://eslint.org/docs/rules/camelcase)"
  },
  {
  	"type": "confirm",
  	"name": "default_case",
  	"message": "Do you want to  require default case in switch statements (off by default) (http://eslint.org/docs/rules/default-case)"
  },
  {
  	"type": "list",
  	"name": "no_underscore_dangle",
  	"message": "Do you want to  disallow dangling underscores in identifiers (http://http://eslint.org/docs/rules/no-underscore-dangle)",
    "choices": [
      "allow",
      "allowAfterThis",
      "allowAfterSuper"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_control_regex",
  	"message": "Do you want to  disallow control characters in regular expressions (http://eslint.org/docs/rules/no-control-regex)"
  },
  {
  	"type": "confirm",
  	"name": "no_div_regex",
  	"message": "Do you want to  disallow division operators explicitly at beginning of regular expression (off by default) (http://eslint.org/docs/rules/no-div-regex)"
  },
  {
  	"type": "confirm",
  	"name": "wrap_regex",
  	"message": "Do you want to  require regex literals to be wrapped in parentheses (off by default) (http://eslint.org/docs/rules/wrap-regex)"
  },
  {
  	"type": "list",
  	"name": "no_cond_assign",
  	"message": "Do you want to  disallow assignment in conditional expressions (http://eslint.org/docs/rules/no-cond-assign)",
    "choices" : [
      "always",
      "except-parens"
    ]
  },
  {
  	"type": "list-depth",
  	"name": "no_console",
  	"message": "Do you want to  disallow use of console (off by default in the node environment) (http://eslint.org/docs/rules/no-console)",
    "choices": [
      {
        "name": "allow",
        "choices": [
          "warn",
          "error",
          "log",
          "info",
          "debug"
        ]
      }
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_constant_condition",
  	"message": "Do you want to  disallow use of constant expressions in conditions (http://eslint.org/docs/rules/no-constant-condition)"
  },
  {
  	"type": "confirm",
  	"name": "no_debugger",
  	"message": "Do you want to  disallow use of debugger (http://eslint.org/docs/rules/no-debugger)"
  },
  {
  	"type": "confirm",
  	"name": "no_empty",
  	"message": "Do you want to  disallow empty statements (http://eslint.org/docs/rules/no-empty)"
  },
  {
  	"type": "confirm",
  	"name": "no_empty_character_class",
  	"message": "Do you want to  disallow the use of empty character classes in regular expressions (http://eslint.org/docs/rules/no-empty-character-class)"
  },
  {
  	"type": "confirm",
  	"name": "no_unreachable",
  	"message": "Do you want to  disallow unreachable statements after a return, throw, continue, or break statement (http://eslint.org/docs/rules/no-unreachable)"
  },
  {
  	"type": "confirm",
  	"name": "valid_typeof",
  	"message": "Do you want to  Ensure that the results of typeof are compared against a valid string (http://eslint.org/docs/rules/valid-typeof)"
  },
  {
  	"type": "input",
  	"name": "complexity",
    "number": true,
  	"message": "Specify the maximum cyclomatic complexity allowed in a program (off by default) (http://eslint.org/docs/rules/complexity)"
  },
  {
  	"type": "checkbox",
  	"name": "consistent_return",
  	"message": "Do you want to  require return statements to either always or never specify values (http://eslint.org/docs/rules/consistent-return)",
    "choices": [
        "treatUndefinedAsUnspecified",
        "treatUndefinedAsUnspecified"
    ]
  },
  {
  	"type": "confirm",
  	"name": "guard_for_in",
  	"message": "Do you want to  make sure for-in loops have an if statement (off by default) (http://eslint.org/docs/rules/guard-for-in)"
  },
  {
  	"type": "confirm",
  	"name": "no_alert",
  	"message": "Do you want to  disallow the use of alert, confirm, and prompt (http://eslint.org/docs/rules/no-alert)"
  },
  {
  	"type": "confirm",
  	"name": "no_caller",
  	"message": "Do you want to  disallow use of arguments.caller or arguments.callee (http://eslint.org/docs/rules/no-caller)"
  },
  {
  	"type": "confirm",
  	"name": "no_else_return",
  	"message": "Do you want to  disallow else after a return in an if (off by default) (http://eslint.org/docs/rules/no-else-return)"
  },
  {
  	"type": "checkbox",
  	"name": "no_labels",
  	"message": "Do you want to  disallow use of labels for anything other then loops and switches (http://eslint.org/docs/rules/no-labels)",
    "choices": [
      "allowLoop",
      "allowSwitch"
    ]
  },
  {
  	"type": "checkbox",
  	"name": "no_eval",
  	"message": "Do you want to  disallow use of eval() (http://eslint.org/docs/rules/no-eval)",
    "choices": [
      "allowIndirect"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_extend_native",
  	"message": "Do you want to  disallow adding to native types (http://eslint.org/docs/rules/no-extend-native)"
  },
  {
  	"type": "confirm",
  	"name": "no_fallthrough",
  	"message": "Do you want to  disallow fallthrough of case statements (http://eslint.org/docs/rules/no-fallthrough)"
  },
  {
  	"type": "confirm",
  	"name": "no_floating_decimal",
  	"message": "Do you want to  disallow the use of leading or trailing decimal points in numeric literals (off by default) (http://eslint.org/docs/rules/no-floating-decimal)"
  },
  {
  	"type": "confirm",
  	"name": "no_implied_eval",
  	"message": "Do you want to  disallow use of eval()-like methods (http://eslint.org/docs/rules/no-implied-eval)"
  },
  {
  	"type": "confirm",
  	"name": "no_multi_str",
  	"message": "Do you want to  disallow use of multiline strings (http://eslint.org/docs/rules/no-multi-str)"
  },
  {
  	"type": "confirm",
  	"name": "no_new_wrappers",
  	"message": "Do you want to  disallows creating new instances of String, Number, and Boolean (http://eslint.org/docs/rules/no-new-wrappers)"
  },
  {
  	"type": "confirm",
  	"name": "no_octal",
  	"message": "Do you want to  disallow use of octal literals (http://eslint.org/docs/rules/no-octal)"
  },
  {
  	"type": "confirm",
  	"name": "no_process_env",
  	"message": "Do you want to  disallow use of process.env (off by default) (http://eslint.org/docs/rules/no-process-env)"
  },
  {
  	"type": "confirm",
  	"name": "no_proto",
  	"message": "Do you want to  disallow usage of __proto__ property (http://eslint.org/docs/rules/no-proto)"
  },
  {
  	"type": "list",
  	"name": "no_return_assign",
  	"message": "Do you want to  disallow use of assignment in return statement (http://eslint.org/docs/rules/no-return-assign)",
    "choices": [
      "except-parens",
      "always"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_script_url",
  	"message": "Do you want to  disallow use of javascript: urls. (http://eslint.org/docs/rules/no-script-url)"
  },
  {
  	"type": "checkbox",
  	"name": "no_unused_expressions",
  	"message": "Do you want to  disallow usage of expressions in statement position (http://eslint.org/docs/rules/no-unused-expressions)",
    "choices": [
      "allowShortCircuit",
      "allowTernary"
    ]
  },
  {
  	"type": "confirm",
  	"name": "no_with",
  	"message": "Do you want to  disallow use of the with statement (http://eslint.org/docs/rules/no-with)"
  },
  {
  	"type": "list",
  	"name": "radix",
  	"message": "Do you want to  require use of the second argument for parseInt() (off by default) (http://eslint.org/docs/rules/radix)",
    "choices": [
      "always",
      "as-needed"
    ]
  },
  {
  	"type": "list",
  	"name": "yoda",
  	"message": "Do you want to  require or disallow Yoda conditions (http://eslint.org/docs/rules/yoda)",
    "choices": [
      "never",
      "always"
    ]
  },
  {
  	"type": "confirm",
  	"name": "strict",
  	"message": "Do you want to  (deprecated) require or disallow the 'use strict' pragma in the global scope (off by default in the node environment) (http://eslint.org/docs/rules/strict)"
  },
  {
  	"type": "confirm",
  	"name": "handle_callback_err",
  	"message": "Do you want to  enforces error handling in callbacks (off by default) (on by default in the node environment) (http://eslint.org/docs/rules/handle-callback-err)"
  },
  {
  	"type": "confirm",
  	"name": "no_path_concat",
  	"message": "Do you want to  disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment) (http://eslint.org/docs/rules/no-path-concat)"
  },
  {
  	"type": "confirm",
  	"name": "no_process_exit",
  	"message": "Do you want to  disallow process.exit() (on by default in the node environment) (http://eslint.org/docs/rules/no-process-exit)"
  },
  {
  	"type": "confirm",
  	"name": "no_sync",
  	"message": "Do you want to  disallow use of synchronous methods (off by default) (http://eslint.org/docs/rules/no-sync)"
  },
  {
  	"type": "confirm",
  	"name": "consistent_this",
  	"message": "Do you want to  enforces consistent naming when capturing the current execution context (off by default) (http://eslint.org/docs/rules/consistent-this)"
  },
  {
  	"type": "list-depth",
  	"name": "max_nested_callbacks",
  	"message": "Do you want to  specify the maximum depth callbacks can be nested (off by default) (http://eslint.org/docs/rules/max-nested-callbacks)",
    "choices": [
      {
        "name": "max",
        "type": "input",
        "number": true
      }
    ]
  },
  {
    "type": "list-depth",
  	"name": "no_multiple_empty_lines",
  	"message": "Do you want to  disallow multiple empty lines (off by default) (http://eslint.org/docs/rules/no-multiple-empty-lines)",
    "choices": [
      {
        "name": "max",
        "type": "input",
        "number": true,
        "message": "enforces a maximum number of consecutive empty lines."
      },
      {
        "name": "maxEOF",
        "type": "input",
        "number": true,
        "message": "enforces a maximum number of consecutive empty lines at the end of files."
      },
      {
        "name": "maxBOF",
        "type": "input",
        "number": true,
        "message": "enforces a maximum number of consecutive empty lines at the beginning of files."
      },
    ]
  }
];