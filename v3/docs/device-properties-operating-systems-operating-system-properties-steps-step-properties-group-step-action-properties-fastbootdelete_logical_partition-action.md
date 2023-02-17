# fastboot:delete_logical_partition action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition
```

Delete a logical partition with the given name.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:delete_logical_partition Type

`object` ([fastboot:delete_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md))

# fastboot:delete_logical_partition Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partition](#partition) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition/properties/partition") |

## partition



`partition`

*   is required

*   Type: `string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action-properties-partition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action-properties-partition.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition/properties/partition")

### partition Type

`string` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action-properties-partition.md))
