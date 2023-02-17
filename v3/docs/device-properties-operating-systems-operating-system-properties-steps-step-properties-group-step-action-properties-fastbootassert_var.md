# fastboot:assert_var Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var
```

Assert a bootloader variable over fastboot getvar.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:assert_var Type

`object` ([fastboot:assert_var](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md))

## fastboot:assert_var Constraints

**maximum number of properties**: the maximum number of properties for this object is: `2`

**minimum number of properties**: the minimum number of properties for this object is: `2`

# fastboot:assert_var Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                        |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [variable](#variable) | `string`      | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-variable.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/variable") |
| [value](#value)       | `string`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-value.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/value")       |
| [regex](#regex)       | Not specified | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-regex.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/regex")       |

## variable

Variable to assert using fastboot getvar

`variable`

*   is required

*   Type: `string` ([Variable](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-variable.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-variable.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/variable")

### variable Type

`string` ([Variable](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-variable.md))

## value

Asserted variable value

`value`

*   is optional

*   Type: `string` ([Value](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-value.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-value.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/value")

### value Type

`string` ([Value](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-value.md))

## regex



`regex`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var-properties-regex.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var/properties/regex")

### regex Type

unknown
