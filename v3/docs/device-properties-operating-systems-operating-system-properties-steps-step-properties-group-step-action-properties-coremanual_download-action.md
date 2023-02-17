# core:manual_download action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download
```

Instruct the user to manually download a file that can't be downloaded automatically, because it is behind some protective mechanism. The user will be instructed to load the file into the installer to continue the installation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## core:manual_download Type

`object` ([core:manual_download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md))

# core:manual_download Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [group](#group) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/group") |
| [file](#file)   | `object` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file")   |

## group

Files group

`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-group.md))

## file

File to download

`file`

*   is required

*   Type: `object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file")

### file Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md))
