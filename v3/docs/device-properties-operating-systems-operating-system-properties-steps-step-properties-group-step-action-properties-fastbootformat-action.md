# fastboot:format action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format
```

Format a partition over fasboot.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:format Type

`object` ([fastboot:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md))

# fastboot:format Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                         |
| :---------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partition](#partition) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/partition") |
| [type](#type)           | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-type.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/type") |
| [size](#size)           | `number` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-size.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/size") |

## partition

Partition to format.

`partition`

*   is required

*   Type: `string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/partition")

### partition Type

`string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition.md))

## type

Partition type to use

`type`

*   is optional

*   Type: `string` ([Partition type](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-type.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-type.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/type")

### type Type

`string` ([Partition type](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"ext2"` |             |
| `"ext4"` |             |
| `"f2fs"` |             |

## size

Partition size

`size`

*   is optional

*   Type: `number` ([Partition size](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-size.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-size.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format/properties/size")

### size Type

`number` ([Partition size](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action-properties-partition-size.md))
