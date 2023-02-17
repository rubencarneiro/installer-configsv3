# Verify Recovery Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install/oneOf/0/properties/verify_recovery
```

Verify that the recovery is capable of installing Ubuntu Touch by asserting that `adb getprop ro.ubuntu.recovery`. Defaults to false.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## verify_recovery Type

`boolean` ([Verify Recovery](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0-properties-verify-recovery.md))
