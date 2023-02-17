# fastboot:resize_logical_partition action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition
```

Resize a logical partition with the given name and final size, in the super partition.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:resize_logical_partition Type

`object` ([fastboot:resize_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md))

# fastboot:resize_logical_partition Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partition](#partition) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition/properties/partition") |
| [size](#size)           | `number` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition-size.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition/properties/size") |

## partition



`partition`

*   is required

*   Type: `string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition/properties/partition")

### partition Type

`string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition.md))

## size



`size`

*   is required

*   Type: `number` ([Partition size](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition-size.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition-size.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition/properties/size")

### size Type

`number` ([Partition size](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action-properties-partition-size.md))
