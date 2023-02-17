# adb:assert_prop action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop
```

Assert a property value over adb shell getprop or, failing that, reading from the default.prop file.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## adb:assert_prop Type

`object` ([adb:assert_prop action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md))

## adb:assert_prop Constraints

**maximum number of properties**: the maximum number of properties for this object is: `2`

**minimum number of properties**: the minimum number of properties for this object is: `2`

# adb:assert_prop Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                             |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [prop](#prop)   | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-property.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/prop")           |
| [value](#value) | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-value.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/value")             |
| [regex](#regex) | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex") |

## prop

Property to assert using adb getprop

`prop`

*   is required

*   Type: `string` ([Property](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-property.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-property.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/prop")

### prop Type

`string` ([Property](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-property.md))

## value

Asserted property value

`value`

*   is optional

*   Type: `string` ([Value](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-value.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-value.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/value")

### value Type

`string` ([Value](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-value.md))

## regex

RegEx Object

`regex`

*   is optional

*   Type: `object` ([Regular Expression](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md "regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex")

### regex Type

`object` ([Regular Expression](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md))
