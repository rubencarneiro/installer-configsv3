# Untitled object in Device Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Details](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [archive](#archive) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-archive-to-decompress.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items/properties/archive") |
| [dir](#dir)         | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items/properties/dir")          |

## archive



`archive`

*   is required

*   Type: `string` ([Archive to decompress](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-archive-to-decompress.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-archive-to-decompress.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items/properties/archive")

### archive Type

`string` ([Archive to decompress](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-archive-to-decompress.md))

## dir



`dir`

*   is required

*   Type: `string` ([Target directory](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items/properties/dir")

### dir Type

`string` ([Target directory](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items-properties-target-directory.md))
