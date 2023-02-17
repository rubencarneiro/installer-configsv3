# File Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file
```

File to download

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## file Type

`object` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md))

# file Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-name.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/name")           |
| [url](#url)           | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-url.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/url")             |
| [checksum](#checksum) | `object` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-checksum.md "checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/checksum") |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-name.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/name")

### name Type

`string`

## url

URL of the file to download

`url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-url.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/url")

### url Type

`string`

## checksum

Verify a file's integrity by checking it with a hashing algorithm

`checksum`

*   is required

*   Type: `object` ([Checksum](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-checksum.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-checksum.md "checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/checksum")

### checksum Type

`object` ([Checksum](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-checksum.md))
