# fastboot:wipe_super action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super
```

Wipe super partition using fastboot.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## fastboot:wipe_super Type

`object` ([fastboot:wipe_super action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md))

# fastboot:wipe_super Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                         |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [image](#image) | `object` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image") |

## image



`image`

*   is required

*   Type: `object` ([Image](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image")

### image Type

`object` ([Image](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md))
