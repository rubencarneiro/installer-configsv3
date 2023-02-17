# fastboot:flash action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash
```

Flash a partition over fastboot.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:flash Type

`object` ([fastboot:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md))

# fastboot:flash Properties

| Property                  | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                         |
| :------------------------ | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partitions](#partitions) | `array` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions") |

## partitions

Partitions to flash

`partitions`

*   is required

*   Type: `object[]` ([Partition to flash](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions")

### partitions Type

`object[]` ([Partition to flash](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash.md))
