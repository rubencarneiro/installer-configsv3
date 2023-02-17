# Image Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## image Type

`object` ([Image](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md))

# image Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [file](#file)   | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image/properties/file")   |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image/properties/group") |

## file



`file`

*   is required

*   Type: `string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image/properties/file")

### file Type

`string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-file.md))

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image-properties-group.md))
