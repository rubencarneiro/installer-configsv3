# Partition to flash Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Partition to flash](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash.md))

# items Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                            |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partition](#partition) | `string`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/partition") |
| [file](#file)           | `string`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/file")           |
| [group](#group)         | `string`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/group")         |
| [raw](#raw)             | `boolean` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-raw.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/raw")             |
| [flags](#flags)         | `array`   | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-flags.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/flags")         |

## partition



`partition`

*   is required

*   Type: `string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-partition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/partition")

### partition Type

`string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-partition.md))

## file



`file`

*   is required

*   Type: `string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-file.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-file.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/file")

### file Type

`string` ([File](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-file.md))

## group



`group`

*   is required

*   Type: `string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-group.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-group.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/group")

### group Type

`string` ([Group](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-group.md))

## raw



`raw`

*   is optional

*   Type: `boolean` ([Raw](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-raw.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-raw.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/raw")

### raw Type

`boolean` ([Raw](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-raw.md))

## flags



`flags`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-flags.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/flags")

### flags Type

`string[]`
