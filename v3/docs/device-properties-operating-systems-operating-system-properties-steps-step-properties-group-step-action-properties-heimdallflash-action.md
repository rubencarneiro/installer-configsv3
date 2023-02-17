# heimdall:flash action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash
```

Flash partitions using heimdall.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## heimdall:flash Type

`object` ([heimdall:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md))

# heimdall:flash Properties

| Property                  | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                         |
| :------------------------ | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [partitions](#partitions) | `array` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash/properties/partitions") |

## partitions

Partitions to flash

`partitions`

*   is required

*   Type: `object[]` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions-partition.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash/properties/partitions")

### partitions Type

`object[]` ([Partition](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions-partition.md))
