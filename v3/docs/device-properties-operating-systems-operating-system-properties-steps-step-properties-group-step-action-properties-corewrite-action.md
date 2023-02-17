# core:write action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write
```

Write text to a file.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## core:write Type

`object` ([core:write action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md))

# core:write Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                           |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [group](#group)     | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/group")     |
| [file](#file)       | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/file")       |
| [content](#content) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-content.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/content") |

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-group.md))

## file



`file`

*   is required

*   Type: `string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/file")

### file Type

`string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-file.md))

## content



`content`

*   is required

*   Type: `string` ([Content](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-content.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-content.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write/properties/content")

### content Type

`string` ([Content](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action-properties-content.md))
