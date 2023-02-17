# Action Schema

```txt
action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items
```

Actions represent atomic tasks to be executed by different plugins of the UBports Installer. Plugins may interface with each other to reduce the amount of redundant code.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device.schema.json*](../device.schema.json "open original schema") |

## items Type

`object` ([Action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md))

## items Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# items Properties

| Property                                                               | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                   |
| :--------------------------------------------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [adb:shell](#adbshell)                                                 | Merged        | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:shell")                                                 |
| [adb:reboot](#adbreboot)                                               | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbreboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:reboot")                                               |
| [adb:format](#adbformat)                                               | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbformat-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:format")                                               |
| [adb:sideload](#adbsideload)                                           | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbsideload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:sideload")                                           |
| [adb:push](#adbpush)                                                   | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:push")                                                   |
| [adb:preparesystemimage](#adbpreparesystemimage)                       | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpreparesystemimage-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:preparesystemimage")                       |
| [adb:assert_prop](#adbassert_prop)                                     | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop")                                     |
| [asteroid_os:download](#asteroid_osdownload)                           | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-asteroid_osdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/asteroid_os:download")                           |
| [core:download](#coredownload)                                         | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:download")                                         |
| [core:write](#corewrite)                                               | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write")                                               |
| [core:unpack](#coreunpack)                                             | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack")                                             |
| [core:manual_download](#coremanual_download)                           | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download")                           |
| [core:info](#coreinfo)                                                 | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreinfo-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:info")                                                 |
| [core:group](#coregroup)                                               | `array`       | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coregroup-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:group")                                               |
| [core:user_action](#coreuser_action)                                   | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreuser_action-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:user_action")                                   |
| [fastboot:oem_unlock](#fastbootoem_unlock)                             | Merged        | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:oem_unlock")                             |
| [fastboot:flashing_unlock](#fastbootflashing_unlock)                   | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflashing_unlock-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flashing_unlock")                   |
| [fastboot:reboot_bootloader](#fastbootreboot_bootloader)               | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_bootloader-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_bootloader")               |
| [fastboot:reboot_fastboot](#fastbootreboot_fastboot)                   | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_fastboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_fastboot")                   |
| [fastboot:reboot_recovery](#fastbootreboot_recovery)                   | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_recovery-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_recovery")                   |
| [fastboot:update](#fastbootupdate)                                     | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootupdate-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:update")                                     |
| [fastboot:boot](#fastbootboot)                                         | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot")                                         |
| [fastboot:reboot](#fastbootreboot)                                     | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot")                                     |
| [fastboot:continue](#fastbootcontinue)                                 | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcontinue-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:continue")                                 |
| [fastboot:erase](#fastbooterase)                                       | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbooterase-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:erase")                                       |
| [fastboot:format](#fastbootformat)                                     | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format")                                     |
| [fastboot:flash](#fastbootflash)                                       | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash")                                       |
| [fastboot:create_logical_partition](#fastbootcreate_logical_partition) | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcreate_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:create_logical_partition") |
| [fastboot:delete_logical_partition](#fastbootdelete_logical_partition) | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition") |
| [fastboot:resize_logical_partition](#fastbootresize_logical_partition) | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition") |
| [fastboot:wipe_super](#fastbootwipe_super)                             | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super")                             |
| [fastboot:set_active](#fastbootset_active)                             | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active")                             |
| [fastboot:assert_var](#fastbootassert_var)                             | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var")                                    |
| [fastboot:wait](#fastbootwait)                                         | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwait-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wait")                                         |
| [heimdall:flash](#heimdallflash)                                       | `object`      | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash")                                       |
| [lineage_os:download](#lineage_osdownload)                             | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/lineage_os:download")                             |
| [lineage_os:install](#lineage_osinstall)                               | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osinstall-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/lineage_os:install")                               |
| [postmarketos:download](#postmarketosdownload)                         | Not specified | Optional | can be null    | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-postmarketosdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/postmarketos:download")                         |
| [systemimage:install](#systemimageinstall)                             | Merged        | Optional | cannot be null | [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install")                             |

## adb:shell

Run a command on the device via adb shell

`adb:shell`

*   is optional

*   Type: merged type ([adb:shell action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:shell")

### adb:shell Type

merged type ([adb:shell action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action.md))

one (and only one) of

*   [Untitled array in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action-oneof-0.md "check type definition")

*   [Untitled object in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action-oneof-1.md "check type definition")

## adb:reboot

Reboot the device over adb.

`adb:reboot`

*   is optional

*   Type: `object` ([adb:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbreboot-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbreboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:reboot")

### adb:reboot Type

`object` ([adb:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbreboot-action.md))

## adb:format

Format a partition over adb shell.

`adb:format`

*   is optional

*   Type: `object` ([adb:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbformat-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbformat-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:format")

### adb:format Type

`object` ([adb:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbformat-action.md))

## adb:sideload

Sideload a zip file OTA package.

`adb:sideload`

*   is optional

*   Type: `object` ([adb:sideload action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbsideload-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbsideload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:sideload")

### adb:sideload Type

`object` ([adb:sideload action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbsideload-action.md))

## adb:push

Push files to the device over adb.

`adb:push`

*   is optional

*   Type: `object` ([adb:push action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:push")

### adb:push Type

`object` ([adb:push action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action.md))

## adb:preparesystemimage

Prepare for Ubuntu Touch system image installation.

`adb:preparesystemimage`

*   is optional

*   Type: `null`, the value must be null ([adb:preparesystemimage action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpreparesystemimage-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpreparesystemimage-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:preparesystemimage")

### adb:preparesystemimage Type

`null`, the value must be null ([adb:preparesystemimage action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpreparesystemimage-action.md))

## adb:assert_prop

Assert a property value over adb shell getprop or, failing that, reading from the default.prop file.

`adb:assert_prop`

*   is optional

*   Type: `object` ([adb:assert_prop action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop")

### adb:assert_prop Type

`object` ([adb:assert_prop action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md))

### adb:assert_prop Constraints

**maximum number of properties**: the maximum number of properties for this object is: `2`

**minimum number of properties**: the minimum number of properties for this object is: `2`

## asteroid_os:download

Download AsteroidOS images.

`asteroid_os:download`

*   is optional

*   Type: `null`, the value must be null ([asteroid_os:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-asteroid_osdownload-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-asteroid_osdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/asteroid_os:download")

### asteroid_os:download Type

`null`, the value must be null ([asteroid_os:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-asteroid_osdownload-action.md))

## core:download

Download files.

`core:download`

*   is optional

*   Type: `object` ([core:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:download")

### core:download Type

`object` ([core:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action.md))

## core:write

Write text to a file.

`core:write`

*   is optional

*   Type: `object` ([core:write action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write")

### core:write Type

`object` ([core:write action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md))

## core:unpack

Unpack/decompress an archive using 7z.

`core:unpack`

*   is optional

*   Type: `object` ([core:unpack action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack")

### core:unpack Type

`object` ([core:unpack action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action.md))

## core:manual_download

Instruct the user to manually download a file that can't be downloaded automatically, because it is behind some protective mechanism. The user will be instructed to load the file into the installer to continue the installation.

`core:manual_download`

*   is optional

*   Type: `object` ([core:manual_download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download")

### core:manual_download Type

`object` ([core:manual_download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md))

## core:info

Display information in the UI.

`core:info`

*   is optional

*   Type: `object` ([core:info action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreinfo-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreinfo-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:info")

### core:info Type

`object` ([core:info action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreinfo-action.md))

### core:info Constraints

**minimum number of properties**: the minimum number of properties for this object is: `1`

## core:group

Run steps as a group. Useful for applying the same conditional expression to a whole series of steps.

`core:group`

*   is optional

*   Type: unknown\[]

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coregroup-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:group")

### core:group Type

unknown\[]

## core:user_action

Instruct the user to run a user_action.

`core:user_action`

*   is optional

*   Type: `object` ([core:user_action action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreuser_action-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreuser_action-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:user_action")

### core:user_action Type

`object` ([core:user_action action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreuser_action-action.md))

## fastboot:oem_unlock

OEM-unlock the device. Instruct the user to obtain and enter a code if necessary.

`fastboot:oem_unlock`

*   is optional

*   Type: merged type ([fastboot:oem_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:oem_unlock")

### fastboot:oem_unlock Type

merged type ([fastboot:oem_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action.md))

one (and only one) of

*   [Untitled null in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action-oneof-0.md "check type definition")

*   [Untitled object in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action-oneof-1.md "check type definition")

## fastboot:flashing_unlock

Flashing-unlock the device.

`fastboot:flashing_unlock`

*   is optional

*   Type: `null`, the value must be null ([fastboot:flashing_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflashing_unlock-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflashing_unlock-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flashing_unlock")

### fastboot:flashing_unlock Type

`null`, the value must be null ([fastboot:flashing_unlock action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflashing_unlock-action.md))

## fastboot:reboot_bootloader

Reboot the device to bootloader over fastboot.

`fastboot:reboot_bootloader`

*   is optional

*   Type: `null`, the value must be null ([fastboot:reboot_bootloader action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_bootloader-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_bootloader-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_bootloader")

### fastboot:reboot_bootloader Type

`null`, the value must be null ([fastboot:reboot_bootloader action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_bootloader-action.md))

## fastboot:reboot_fastboot

Reboot the device to fastboot over fastboot.

`fastboot:reboot_fastboot`

*   is optional

*   Type: `null`, the value must be null ([fastboot:reboot_fastboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_fastboot-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_fastboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_fastboot")

### fastboot:reboot_fastboot Type

`null`, the value must be null ([fastboot:reboot_fastboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_fastboot-action.md))

## fastboot:reboot_recovery

Reboot the device to recovery over fastboot.

`fastboot:reboot_recovery`

*   is optional

*   Type: `null`, the value must be null ([fastboot:reboot_recovery action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_recovery-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_recovery-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot_recovery")

### fastboot:reboot_recovery Type

`null`, the value must be null ([fastboot:reboot_recovery action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot_recovery-action.md))

## fastboot:update

Apply fastboot update zip.

`fastboot:update`

*   is optional

*   Type: `object` ([fastboot:update action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootupdate-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootupdate-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:update")

### fastboot:update Type

`object` ([fastboot:update action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootupdate-action.md))

## fastboot:boot

Boot an image file over fastboot.

`fastboot:boot`

*   is optional

*   Type: `object` ([fastboot:boot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot")

### fastboot:boot Type

`object` ([fastboot:boot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md))

## fastboot:reboot

Reboot over fastboot.

`fastboot:reboot`

*   is optional

*   Type: `null`, the value must be null ([fastboot:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:reboot")

### fastboot:reboot Type

`null`, the value must be null ([fastboot:reboot action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootreboot-action.md))

## fastboot:continue

Continue fastboot booting.

`fastboot:continue`

*   is optional

*   Type: `null`, the value must be null ([fastboot:continue action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcontinue-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcontinue-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:continue")

### fastboot:continue Type

`null`, the value must be null ([fastboot:continue action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcontinue-action.md))

## fastboot:erase

Erase a partition over fastboot.

`fastboot:erase`

*   is optional

*   Type: `object` ([fastboot:erase action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbooterase-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbooterase-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:erase")

### fastboot:erase Type

`object` ([fastboot:erase action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbooterase-action.md))

## fastboot:format

Format a partition over fasboot.

`fastboot:format`

*   is optional

*   Type: `object` ([fastboot:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format")

### fastboot:format Type

`object` ([fastboot:format action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md))

## fastboot:flash

Flash a partition over fastboot.

`fastboot:flash`

*   is optional

*   Type: `object` ([fastboot:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash")

### fastboot:flash Type

`object` ([fastboot:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md))

## fastboot:create_logical_partition

Create a logical partition with the given name and size, in the super partition.

`fastboot:create_logical_partition`

*   is optional

*   Type: `object` ([fastboot:create_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcreate_logical_partition-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcreate_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:create_logical_partition")

### fastboot:create_logical_partition Type

`object` ([fastboot:create_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcreate_logical_partition-action.md))

## fastboot:delete_logical_partition

Delete a logical partition with the given name.

`fastboot:delete_logical_partition`

*   is optional

*   Type: `object` ([fastboot:delete_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition")

### fastboot:delete_logical_partition Type

`object` ([fastboot:delete_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md))

## fastboot:resize_logical_partition

Resize a logical partition with the given name and final size, in the super partition.

`fastboot:resize_logical_partition`

*   is optional

*   Type: `object` ([fastboot:resize_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition")

### fastboot:resize_logical_partition Type

`object` ([fastboot:resize_logical_partition action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md))

## fastboot:wipe_super

Wipe super partition using fastboot.

`fastboot:wipe_super`

*   is optional

*   Type: `object` ([fastboot:wipe_super action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super")

### fastboot:wipe_super Type

`object` ([fastboot:wipe_super action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md))

## fastboot:set_active

Set active fastboot slot.

`fastboot:set_active`

*   is optional

*   Type: `object` ([fastboot:set_active action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active")

### fastboot:set_active Type

`object` ([fastboot:set_active action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md))

## fastboot:assert_var

Assert a bootloader variable over fastboot getvar.

`fastboot:assert_var`

*   is optional

*   Type: `object` ([fastboot:assert_var](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var")

### fastboot:assert_var Type

`object` ([fastboot:assert_var](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md))

### fastboot:assert_var Constraints

**maximum number of properties**: the maximum number of properties for this object is: `2`

**minimum number of properties**: the minimum number of properties for this object is: `2`

## fastboot:wait

Wait until device becomes available over fastboot.

`fastboot:wait`

*   is optional

*   Type: `null`, the value must be null ([fastboot:wait action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwait-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwait-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wait")

### fastboot:wait Type

`null`, the value must be null ([fastboot:wait action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwait-action.md))

## heimdall:flash

Flash partitions using heimdall.

`heimdall:flash`

*   is optional

*   Type: `object` ([heimdall:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash")

### heimdall:flash Type

`object` ([heimdall:flash action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md))

## lineage_os:download

Download LineageOS image files.

`lineage_os:download`

*   is optional

*   Type: `null`, the value must be null ([lineage_os:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osdownload-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/lineage_os:download")

### lineage_os:download Type

`null`, the value must be null ([lineage_os:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osdownload-action.md))

## lineage_os:install

Install LineageOS images.

`lineage_os:install`

*   is optional

*   Type: `null`, the value must be null ([lineage_os:install action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osinstall-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osinstall-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/lineage_os:install")

### lineage_os:install Type

`null`, the value must be null ([lineage_os:install action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-lineage_osinstall-action.md))

## postmarketos:download

Download postmarketOS image files.

`postmarketos:download`

*   is optional

*   Type: `null`, the value must be null ([postmarketos:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-postmarketosdownload-action.md))

*   can be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-postmarketosdownload-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/postmarketos:download")

### postmarketos:download Type

`null`, the value must be null ([postmarketos:download action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-postmarketosdownload-action.md))

## systemimage:install

Download and install systemimage.

`systemimage:install`

*   is optional

*   Type: merged type ([systemimage:install action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action.md))

*   cannot be null

*   defined in: [Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action.md "action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install")

### systemimage:install Type

merged type ([systemimage:install action](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action.md))

one (and only one) of

*   [Untitled object in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0.md "check type definition")

*   [Untitled null in Device](device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-1.md "check type definition")
