# RegEx Flags Schema

```txt
regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex/properties/flags
```

JS RegEx flags

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.schema.json*](../device.schema.json "open original schema") |

## flags Type

`string` ([RegEx Flags](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression-properties-regex-flags.md))

## flags Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"i"` |             |
| `"g"` |             |
| `"s"` |             |
| `"m"` |             |
| `"y"` |             |
| `"u"` |             |
