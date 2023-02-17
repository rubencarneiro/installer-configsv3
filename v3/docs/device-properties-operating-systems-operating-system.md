# Operating system Schema

```txt
operating_systems.schema.yml#/properties/operating_systems/items
```

An operating system available for installation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Operating system](device-properties-operating-systems-operating-system.md))

# items Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :-------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-os-name.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/name")                              |
| [codename](#codename)                         | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-codename-of-the-device.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/codename")           |
| [compatible_installer](#compatible_installer) | `string` | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-compatible-installer.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/compatible_installer") |
| [options](#options)                           | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-options.md "options.schema.yml#/properties/operating_systems/items/properties/options")                                     |
| [prerequisites](#prerequisites)               | `array`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-prerequisites.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites")               |
| [steps](#steps)                               | `array`  | Required | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/steps")                               |
| [eula](#eula)                                 | `object` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-eula.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/eula")                                 |
| [slideshow](#slideshow)                       | `array`  | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-slideshow.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow")                       |
| [video](#video)                               | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-video.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/video")                               |
| [donate](#donate)                             | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-donate.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/donate")                             |
| [get_involved](#get_involved)                 | `string` | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-get_involved.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/get_involved")                 |

## name

Human-readable name of the operating system.

`name`

*   is required

*   Type: `string` ([OS name](device-properties-operating-systems-operating-system-properties-os-name.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-os-name.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/name")

### name Type

`string` ([OS name](device-properties-operating-systems-operating-system-properties-os-name.md))

## codename

Codename of the device as used by the operating system.

`codename`

*   is optional

*   Type: `string` ([Codename of the device](device-properties-operating-systems-operating-system-properties-codename-of-the-device.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-codename-of-the-device.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/codename")

### codename Type

`string` ([Codename of the device](device-properties-operating-systems-operating-system-properties-codename-of-the-device.md))

## compatible_installer



`compatible_installer`

*   is required

*   Type: `string` ([Compatible Installer](device-properties-operating-systems-operating-system-properties-compatible-installer.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-compatible-installer.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/compatible_installer")

### compatible_installer Type

`string` ([Compatible Installer](device-properties-operating-systems-operating-system-properties-compatible-installer.md))

## options

Options for the installation.

`options`

*   is optional

*   Type: `object[]` ([Option](device-properties-operating-systems-operating-system-properties-options-option.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-options.md "options.schema.yml#/properties/operating_systems/items/properties/options")

### options Type

`object[]` ([Option](device-properties-operating-systems-operating-system-properties-options-option.md))

## prerequisites

An array of strings referring to user_actions defined above that are needed before the installation. This should not include the steps from the generic unlock block, but actions specific to the installation of this operating system.

`prerequisites`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-prerequisites.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites")

### prerequisites Type

`string[]`

## steps

An ordered array of objects describing steps required to install the operating system.

`steps`

*   is required

*   Type: `object[]` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/steps")

### steps Type

`object[]` ([Step](device-properties-operating-systems-operating-system-properties-steps-step.md))

## eula

An end-user license agreement

`eula`

*   is optional

*   Type: `object` ([EULA](device-properties-operating-systems-operating-system-properties-eula.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-eula.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/eula")

### eula Type

`object` ([EULA](device-properties-operating-systems-operating-system-properties-eula.md))

## slideshow

An array of slides presenting the operating system's most compelling features.

`slideshow`

*   is optional

*   Type: `object[]` ([Slide](device-properties-operating-systems-operating-system-properties-slideshow-slide.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-slideshow.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow")

### slideshow Type

`object[]` ([Slide](device-properties-operating-systems-operating-system-properties-slideshow-slide.md))

## video

A video introducing the user to the operating system they just installed.

`video`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-video.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/video")

### video Type

`string`

## donate

A link to donate to the developer of the operating system.

`donate`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-donate.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/donate")

### donate Type

`string`

## get_involved

A link to the OSs get involved page.

`get_involved`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-get_involved.md "operating_systems.schema.yml#/properties/operating_systems/items/properties/get_involved")

### get_involved Type

`string`
