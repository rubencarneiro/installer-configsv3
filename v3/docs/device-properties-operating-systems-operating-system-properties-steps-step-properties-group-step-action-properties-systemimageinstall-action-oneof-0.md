# Untitled object in Device Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install/oneOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## 0 Type

`object` ([Details](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0.md))

# 0 Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [verify_recovery](#verify_recovery) | `boolean` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0-properties-verify-recovery.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install/oneOf/0/properties/verify_recovery") |

## verify_recovery

Verify that the recovery is capable of installing Ubuntu Touch by asserting that `adb getprop ro.ubuntu.recovery`. Defaults to false.

`verify_recovery`

*   is optional

*   Type: `boolean` ([Verify Recovery](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0-properties-verify-recovery.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0-properties-verify-recovery.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install/oneOf/0/properties/verify_recovery")

### verify_recovery Type

`boolean` ([Verify Recovery](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0-properties-verify-recovery.md))
