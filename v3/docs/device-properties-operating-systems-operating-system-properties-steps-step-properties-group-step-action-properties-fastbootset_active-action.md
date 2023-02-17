# fastboot:set_active action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active
```

Set active fastboot slot.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:set_active Type

`object` ([fastboot:set_active action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md))

# fastboot:set_active Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                  |
| :------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [slot](#slot) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action-properties-bootloader-slot.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active/properties/slot") |

## slot



`slot`

*   is required

*   Type: `string` ([Bootloader slot](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action-properties-bootloader-slot.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action-properties-bootloader-slot.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active/properties/slot")

### slot Type

`string` ([Bootloader slot](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action-properties-bootloader-slot.md))

### slot Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"a"` |             |
| `"b"` |             |
