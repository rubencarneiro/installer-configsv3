# Regular Expression Schema

```txt
regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex
```

RegEx Object

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## regex Type

`object` ([Regular Expression](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md))

# regex Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pattern](#pattern) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-pattern.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex/properties/pattern") |
| [flags](#flags)     | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-flags.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex/properties/flags")     |

## pattern

JS RegEx pattern to match

`pattern`

*   is required

*   Type: `string` ([RegEx Pattern](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-pattern.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-pattern.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex/properties/pattern")

### pattern Type

`string` ([RegEx Pattern](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-pattern.md))

## flags

JS RegEx flags

`flags`

*   is optional

*   Type: `string` ([RegEx Flags](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-flags.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-flags.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex/properties/flags")

### flags Type

`string` ([RegEx Flags](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-flags.md))

### flags Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"i"` |             |
| `"g"` |             |
| `"s"` |             |
| `"m"` |             |
| `"y"` |             |
| `"u"` |             |
