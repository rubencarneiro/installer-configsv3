# fastboot:boot action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot
```

Boot an image file over fastboot.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:boot Type

`object` ([fastboot:boot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md))

# fastboot:boot Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                             |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [file](#file)   | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot/properties/file")   |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot/properties/group") |

## file



`file`

*   is required

*   Type: `string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot/properties/file")

### file Type

`string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-file.md))

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action-properties-group.md))
