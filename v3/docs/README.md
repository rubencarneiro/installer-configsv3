# README

## Top-level Schemas

*   [Device](./device.md "Device configuration for the UBports Installer") – `v3/schema/device.schema.yml`

## Other Schemas

### Objects

*   [Action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action.md "Actions represent atomic tasks to be executed by different plugins of the UBports Installer") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items`

*   [Checksum](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file-properties-checksum.md "Verify a file's integrity by checking it with a hashing algorithm") – `checksum.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file/properties/checksum`

*   [EULA](./device-properties-operating-systems-operating-system-properties-eula.md "An end-user license agreement") – `operating_systems.schema.yml#/properties/operating_systems/items/properties/eula`

*   [File](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action-properties-files-file.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:download/properties/files/items`

*   [File](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action-properties-file.md "File to download") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download/properties/file`

*   [Handlers](./device-properties-handlers.md "Steps to run to handle specific known errors") – `v3/schema/device.schema.yml#/properties/handlers`

*   [Image](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action-properties-image.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super/properties/image`

*   [Operating system](./device-properties-operating-systems-operating-system.md "An operating system available for installation") – `operating_systems.schema.yml#/properties/operating_systems/items`

*   [Option](./device-properties-operating-systems-operating-system-properties-options-option.md "Option for the installation") – `options.schema.yml#/properties/operating_systems/items/properties/options/items`

*   [Partition](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions-partition.md "Partition to flash") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash/properties/partitions/items`

*   [Partition to flash](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items`

*   [Regular Expression](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action-properties-regular-expression.md "RegEx Object") – `regex.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop/properties/regex`

*   [Remote values](./device-properties-operating-systems-operating-system-properties-options-option-properties-remote-values.md "If the values can be generated from a remote source like the systemimage api, this provides the required information for that") – `options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/remote_values`

*   [Slide](./device-properties-operating-systems-operating-system-properties-slideshow-slide.md "Slide about the operating system") – `operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow/items`

*   [Step](./device-properties-handlers-properties-step.md "Installation step") – `step.schema.yml#/properties/handlers/properties/bootloader_locked`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action-oneof-1.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:shell/oneOf/1`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files-items.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files/items`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootoem_unlock-action-oneof-1.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:oem_unlock/oneOf/1`

*   [Untitled object in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-systemimageinstall-action-oneof-0.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/systemimage:install/oneOf/0`

*   [User action](./device-properties-user-actions-patternproperties-user-action.md "Instruction that can be referenced and presented to the user") – `user_actions.schema.yml#/properties/user_actions/patternProperties/\w`

*   [User actions](./device-properties-user-actions.md "Object that contains instructions for the user for later reference") – `user_actions.schema.yml#/properties/user_actions`

*   [adb:assert_prop action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbassert_prop-action.md "Assert a property value over adb shell getprop or, failing that, reading from the default") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:assert_prop`

*   [adb:format action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbformat-action.md "Format a partition over adb shell") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:format`

*   [adb:push action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action.md "Push files to the device over adb") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:push`

*   [adb:reboot action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbreboot-action.md "Reboot the device over adb") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:reboot`

*   [adb:sideload action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbsideload-action.md "Sideload a zip file OTA package") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:sideload`

*   [core:download action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action.md "Download files") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:download`

*   [core:info action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreinfo-action.md "Display information in the UI") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:info`

*   [core:manual_download action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coremanual_download-action.md "Instruct the user to manually download a file that can't be downloaded automatically, because it is behind some protective mechanism") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:manual_download`

*   [core:unpack action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action.md "Unpack/decompress an archive using 7z") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack`

*   [core:user_action action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreuser_action-action.md "Instruct the user to run a user_action") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:user_action`

*   [core:write action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-corewrite-action.md "Write text to a file") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:write`

*   [fastboot:assert_var](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootassert_var.md "Assert a bootloader variable over fastboot getvar") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:assert_var`

*   [fastboot:boot action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootboot-action.md "Boot an image file over fastboot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:boot`

*   [fastboot:create_logical_partition action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootcreate_logical_partition-action.md "Create a logical partition with the given name and size, in the super partition") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:create_logical_partition`

*   [fastboot:delete_logical_partition action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootdelete_logical_partition-action.md "Delete a logical partition with the given name") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:delete_logical_partition`

*   [fastboot:erase action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbooterase-action.md "Erase a partition over fastboot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:erase`

*   [fastboot:flash action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action.md "Flash a partition over fastboot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash`

*   [fastboot:format action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootformat-action.md "Format a partition over fasboot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:format`

*   [fastboot:resize_logical_partition action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootresize_logical_partition-action.md "Resize a logical partition with the given name and final size, in the super partition") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:resize_logical_partition`

*   [fastboot:set_active action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootset_active-action.md "Set active fastboot slot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:set_active`

*   [fastboot:update action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootupdate-action.md "Apply fastboot update zip") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:update`

*   [fastboot:wipe_super action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootwipe_super-action.md "Wipe super partition using fastboot") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:wipe_super`

*   [heimdall:flash action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action.md "Flash partitions using heimdall") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash`

### Arrays

*   [Aliases](./device-properties-aliases.md "Alternative codenames this device might be identified as") – `v3/schema/device.schema.yml#/properties/aliases`

*   [Arguments](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action-oneof-1-properties-arguments.md "Shell arguments") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:shell/oneOf/1/properties/args`

*   [Doppelgangers](./device-properties-doppelgangers.md "Codenames of devices this device should not be confused with") – `v3/schema/device.schema.yml#/properties/doppelgangers`

*   [Fallback steps](./device-properties-operating-systems-operating-system-properties-steps-step-properties-fallback-steps.md) – `step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/fallback`

*   [Files](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbpush-action-properties-files.md "File names to push") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:push/properties/files`

*   [Files](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coredownload-action-properties-files.md "Files to download") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:download/properties/files`

*   [Flags](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions-partition-to-flash-properties-flags.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions/items/properties/flags`

*   [Operating systems](./device-properties-operating-systems.md "An array of objects describing operating systems available for installation") – `operating_systems.schema.yml#/properties/operating_systems`

*   [Options](./device-properties-operating-systems-operating-system-properties-options.md "Options for the installation") – `options.schema.yml#/properties/operating_systems/items/properties/options`

*   [Partitions](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-fastbootflash-action-properties-partitions.md "Partitions to flash") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/fastboot:flash/properties/partitions`

*   [Partitions](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-heimdallflash-action-properties-partitions.md "Partitions to flash") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/heimdall:flash/properties/partitions`

*   [Prerequisites](./device-properties-operating-systems-operating-system-properties-prerequisites.md "An array of strings referring to user_actions defined above that are needed before the installation") – `operating_systems.schema.yml#/properties/operating_systems/items/properties/prerequisites`

*   [Slideshow](./device-properties-operating-systems-operating-system-properties-slideshow.md "An array of slides presenting the operating system's most compelling features") – `operating_systems.schema.yml#/properties/operating_systems/items/properties/slideshow`

*   [Steps](./device-properties-operating-systems-operating-system-properties-steps.md "An ordered array of objects describing steps required to install the operating system") – `operating_systems.schema.yml#/properties/operating_systems/items/properties/steps`

*   [Unlock actions](./device-properties-unlock-actions.md "An array of strings referring to user_actions defined above that are needed to unlock the device") – `v3/schema/device.schema.yml#/properties/unlock`

*   [Untitled array in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-adbshell-action-oneof-0.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/adb:shell/oneOf/0`

*   [Untitled array in Device](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coreunpack-action-properties-files.md) – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:unpack/properties/files`

*   [Values](./device-properties-operating-systems-operating-system-properties-options-option-properties-values.md "List of values for the select") – `options.schema.yml#/properties/operating_systems/items/properties/options/items/properties/values`

*   [core:group action](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step-action-properties-coregroup-action.md "Run steps as a group") – `action.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions/items/properties/core:group`

*   [group step](./device-properties-operating-systems-operating-system-properties-steps-step-properties-group-step.md) – `step.schema.yml#/properties/operating_systems/items/properties/steps/items/properties/actions`
