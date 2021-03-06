
    'use strict';const fs = require('frida-fs');
(function (){ 
    rpc.exports = {  
    init : function () {Java.perform(function() { const build_prop = {
    "ro.build.id": "KTU84P",
    "ro.build.display.id": "KTU84P",
    "ro.build.version.incremental": "1227136",
    "ro.build.version.sdk": "19",
    "ro.build.version.codename": "REL",
    "ro.build.version.release": "6.0.1",
    "ro.build.date": "Fri Jun 13 07:05:49 UTC 2014",
    "ro.build.date.utc": "1402643149",
    "ro.build.type": "user",
    "ro.build.user": "android-build",
    "ro.build.host": "kpfj3.cbf.corp.google.com",
    "ro.build.tags": "release-keys",
    "ro.product.model": "Nexus 5",
    "ro.product.brand": "google",
    "ro.product.name": "hammerhead",
    "ro.product.device": "hammerhead",
    "ro.product.board": "hammerhead",
    "ro.product.cpu.abi": "armeabi-v7a",
    "ro.product.cpu.abi2": "armeabi",
    "ro.product.manufacturer": "LGE",
    "ro.product.locale.language": "en",
    "ro.product.locale.region": "US",
    "ro.wifi.channels": "",
    "ro.board.platform": "msm8974",
    "ro.build.product": "hammerhead",
    "ro.build.description": "hammerhead-user 4.4.4 KTU84P 1227136 release-keys",
    "ro.build.fingerprint": "google/hammerhead/hammerhead:4.4.4/KTU84P/1227136:user/release-keys",
    "ro.build.characteristics": "nosdcard",
    "ro.config.ringtone": "Titania.ogg",
    "ro.config.notification_sound": "Tethys.ogg",
    "ro.config.alarm_alert": "Oxygen.ogg",
    "ro.com.android.dateformat": "MM-dd-yyyy",
    "ro.com.android.dataroaming": "false",
    "ro.url.legal": "http://www.google.com/intl/%s/mobile/android/basic/phone-legal.html",
    "ro.url.legal.android_privacy": "http://www.google.com/intl/%s/mobile/android/basic/privacy.html",
    "ro.com.google.clientidbase": "android-google",
    "ro.carrier": "unknown",
    "ro.com.android.wifi-watchlist": "GoogleGuest",
    "ro.error.receiver.system.apps": "com.google.android.gms",
    "ro.setupwizard.enterprise_mode": "1",
    "ro.opengles.version": "196608",
    "ro.sf.lcd_density": "480",
    "persist.hwc.mdpcomp.enable": "true",
    "ro.hwui.texture_cache_size": "72",
    "ro.hwui.layer_cache_size": "48",
    "ro.hwui.r_buffer_cache_size": "8",
    "ro.hwui.path_cache_size": "32",
    "ro.hwui.gradient_cache_size": "1",
    "ro.hwui.drop_shadow_cache_size": "6",
    "ro.hwui.texture_cache_flushrate": "0.4",
    "ro.hwui.text_small_cache_width": "1024",
    "ro.hwui.text_small_cache_height": "1024",
    "ro.hwui.text_large_cache_width": "2048",
    "ro.hwui.text_large_cache_height": "1024",
    "drm.service.enabled": "true",
    "ro.qc.sensors.max_geomag_rotvec": "60",
    "ro.qc.sensors.max_gyro_rate": "200",
    "ro.qc.sensors.max_accel_rate": "200",
    "ro.qc.sensors.max_grav": "200",
    "ro.qc.sensors.max_rotvec": "200",
    "ro.qc.sensors.max_ortn": "200",
    "ro.qc.sensors.max_linacc": "200",
    "ro.qc.sensors.max_gamerv_rate": "200",
    "ro.qualcomm.sensors.smd": "true",
    "ro.qualcomm.sensors.game_rv": "true",
    "ro.qualcomm.sensors.georv": "true",
    "ro.qc.sensors.smgr_mag_cal_en": "true",
    "ro.qc.sensors.step_detector": "true",
    "ro.qc.sensors.step_counter": "true",
    "debug.qualcomm.sns.hal": "w",
    "debug.qualcomm.sns.daemon": "w",
    "debug.qualcomm.sns.libsensor1": "w",
    "ro.telephony.call_ring.multiple": "0",
    "wifi.interface": "wlan0",
    "wifi.supplicant_scan_interval": "15",
    "media.aac_51_output_enabled": "true",
    "persist.radio.apm_sim_not_pwdn": "1",
    "ro.telephony.default_network": "10",
    "telephony.lteOnCdmaDevice": "1",
    "persist.radio.mode_pref_nv10": "1",
    "persist.audio.handset.mic.type": "digital",
    "persist.audio.dualmic.config": "endfire",
    "persist.audio.fluence.voicecall": "true",
    "persist.audio.fluence.voicerec": "false",
    "persist.audio.fluence.speaker": "false",
    "af.resampler.quality": "4",
    "persist.radio.custom_ecc": "1",
    "persist.radio.always_send_plmn": "true",
    "ro.input.noresample": "1",
    "dalvik.vm.heapstartsize": "8m",
    "dalvik.vm.heapgrowthlimit": "192m",
    "dalvik.vm.heapsize": "512m",
    "dalvik.vm.heaptargetutilization": "0.75",
    "dalvik.vm.heapminfree": "512k",
    "dalvik.vm.heapmaxfree": "8m",
    "keyguard.no_require_sim": "true",
    "ro.facelock.black_timeout": "400",
    "ro.facelock.det_timeout": "1500",
    "ro.facelock.rec_timeout": "2500",
    "ro.facelock.lively_timeout": "2500",
    "ro.facelock.est_max_time": "600",
    "ro.facelock.use_intro_anim": "false",
    "persist.sys.dalvik.vm.lib": "libdvm.so",
    "net.bt.name": "Android",
    "dalvik.vm.stack-trace-file": "/data/anr/traces.txt"
};

const RootBinaries = [
    "su",
    "busybox",
    "supersu",
    "Superuser.apk",
    "SuperSu.apk",
    "x86.prop",
    "ueventd.android_x86.rc",
    "ueventd.ttVM_x86.rc",
    "ueventd.vbox86.rc",
    "init.ttVM_x86.rc",
    "init.vbox86.rc",
    "fstab.ttVM_x86",
    "fstab.vbox86"
];function send_msg(msg) {
    send({"type" : "msg", "Process" : Process.id, "message" :  msg});
};
function send_file(path, msg) {
    send({"type" : "file", "Process" : Process.id, "file" : fs.readFileSync(path,'utf8'), "path" : path, "message" : msg});
};
function droidmon_log(msg, data) {
    send({"type" : "droidmon", "Process" : Process.id,  "message" : msg, "data": data});
};

var SystemDef = Java.use('java.lang.System');
var RuntimeDef = Java.use('java.lang.Runtime');
var exceptionClass = Java.use('java.lang.Exception');
var SystemLoad_1 = SystemDef.load.overload('java.lang.String');
var SystemLoad_2 = SystemDef.loadLibrary.overload('java.lang.String');
var RuntimeLoad_1 = RuntimeDef.load.overload('java.lang.String');
var RuntimeLoad_2 = RuntimeDef.loadLibrary.overload('java.lang.String');
var ThreadDef = Java.use('java.lang.Thread');
var ThreadObj = ThreadDef.$new();

SystemLoad_1.implementation = function(library) {
    send_msg("Loading dynamic library => {" + library +"}");
    //stackTrace();
    return SystemLoad_1.call(this, library);
}

SystemLoad_2.implementation = function(library) {
    send_msg("Loading dynamic library => {" + library +"}");
    //stackTrace();
    SystemLoad_2.call(this, library);
}

RuntimeLoad_1.implementation = function(library) {
    send_msg("Loading dynamic library => {" + library +"}");
    //stackTrace();
    RuntimeLoad_1.call(this, library);
}

RuntimeLoad_2.implementation = function(library) {
    send_msg("Loading dynamic library => {" + library +"}");
    //stackTrace();
    RuntimeLoad_2.call(this, library);
}

function stackTrace() {
    var stack = ThreadObj.currentThread().getStackTrace();
    for (var i = 0; i < stack.length; i++) {
        send_msg(i + " => " + stack[i].toString());
    }
    send_msg("--------------------------------------------------------------------------");
}//Anti-emulator detection
var ProcessManager = Java.use("java.lang.ProcessManager");
var ProcessImpl = Java.use("java.lang.ProcessManager$ProcessImpl");
var InputStream = Java.use("java.io.InputStream");
ProcessImpl.getInputStream.implementation = function () {
    var Binder = Java.use("android.os.Binder");
    var uid = Binder.getCallingUid();
    if (uid > 10000 && uid < 99999) {
        if (this.getInputStream.call(this) === InputStream.$new("/system/build.prop")) {
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass getInputStream",{
                "class":"java.lang.ProcessManager$ProcessImpl",
                "method":"getInputStream",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": this.getInputStream.call(this),
                "hook_result": InputStream.$new("/data/local/tmp/fake-build.prop")
            });
            return InputStream.$new("/data/local/tmp/fake-build.prop");
        }
        return this.getInputStream.call(this);
    }
};
var ProcManExec = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File', 'boolean');
var ProcManExecVariant = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.lang.String', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'boolean');
ProcManExec.implementation = function(cmd, env, workdir, redirectstderr) {
    var fake_cmd = cmd;
    for (var i = 0; i < cmd.length; i = i + 1) {
        var tmp_cmd = cmd[i];
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
            var fake_cmd = ["grep"];
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass exec",{
                "class":"java.lang.ProcessManager",
                "method":"exec",
                "timestamp": timestamp,
                "type":"content",
                "args": [cmd, env, workdir, redirectstderr],
                "result": tmp_cmd,
                "hook_result": fake_cmd
            });
        }

        if (tmp_cmd == "su") {
            var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass exec",{
                "class":"java.lang.ProcessManager",
                "method":"exec",
                "timestamp": timestamp,
                "type":"content",
                "args": [cmd, env, workdir, redirectstderr],
                "result": tmp_cmd,
                "hook_result": fake_cmd
            });
        }
    }
    return ProcManExec.call(this, fake_cmd, env, workdir, redirectstderr);
};
ProcManExecVariant.implementation = function(cmd, env, directory, stdin, stdout, stderr, redirect) {
    var fake_cmd = cmd;
    for (var i = 0; i < cmd.length; i = i + 1) {
        var tmp_cmd = cmd[i];
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
            var fake_cmd = ["grep"];
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass exec",{
                "class":"java.lang.ProcessManager",
                "method":"exec",
                "timestamp": timestamp,
                "type":"content",
                "args": [cmd, env, directory, stdin, stdout, stderr, redirect],
                "result": tmp_cmd,
                "hook_result": fake_cmd
            });
        }

        if (tmp_cmd == "su") {
            var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass exec",{
                "class":"java.lang.ProcessManager",
                "method":"exec",
                "timestamp": timestamp,
                "type":"content",
                "args": [cmd, env, directory, stdin, stdout, stderr, redirect],
                "result": tmp_cmd,
                "hook_result": fake_cmd
            });
        }
    }
    return ProcManExecVariant.call(this, fake_cmd, env, directory, stdin, stdout, stderr, redirect);
};//Anti-emulator detection
var ProcessBuilder = Java.use('java.lang.ProcessBuilder');
var executeCommand = ProcessBuilder.command.overload('java.util.List');
ProcessBuilder.start.implementation = function() {
    var cmd = this.command.call(this);
    var shouldModifyCommand = false;
    for (var i = 0; i < cmd.size(); i = i + 1) {
        var tmp_cmd = cmd.get(i).toString();
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd.indexOf("mount") != -1 || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd.indexOf("id") != -1) {
            shouldModifyCommand = true;
        }
    }
    if (shouldModifyCommand) {
        var date = new Date(); var timestamp = date.getTime();
        droidmon_log("Bypass start",{
                "class":"java.lang.ProcessBuilder",
                "method":"start",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": cmd,
                "hook_result": this.command.call(this, ["grep"])
        });
        this.command.call(this, ["grep"]);
        return this.start.call(this);
    }
    if (cmd.indexOf("su") != -1) {
        var date = new Date(); var timestamp = date.getTime();
        droidmon_log("Bypass start",{
                "class":"java.lang.ProcessBuilder",
                "method":"start",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": cmd,
                "hook_result": this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"])
        });
        this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"]);
        return this.start.call(this);
    }
    if (tmp_cmd.indexOf("uptime") != -1){
        var date = new Date(); var timestamp = date.getTime();
        droidmon_log("Bypass start",{
                "class":"java.lang.ProcessBuilder",
                "method":"start",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": cmd,
                "hook_result": this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"])
        });
        this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"]);
        return this.start.call(this);
    }
    return this.start.call(this);
};var LocationManager = Java.use("android.location.LocationManager");
var Location = Java.use("android.location.Location");
LocationManager.getLastKnownLocation.implementation = function () {
    var l = Location.$new(LocationManager.GPS_PROVIDER);
    l.setLatitude(10.03);
    l.setLongitude(25.05);
    var date = new Date(); var timestamp = date.getTime();
    droidmon_log("Bypass getLastKnownLocation",{
        "class":"android.location.LocationManager",
        "method":"getLastKnownLocation",
        "timestamp": timestamp,
        "type":"content",
        "args":"",
        "result": this.getLastKnownLocation.call(this),
        "hook_result": l
    });
    return l;
};

//Anti-emulator detection
var Debug = Java.use("android.os.Debug");
Debug.isDebuggerConnected.implementation = function () {
    send_msg("Bypass isDebuggerConnected");
    var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass isDebuggerConnected",{
                "class":"android.os.Debug",
                "method":"isDebuggerConnected",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": this.isDebuggerConnected.call(this),
                "hook_result": false
            });
    return false;
};//Anti-emulator detection
Interceptor.attach(Module.findExportByName("libc.so", "__system_property_get"), {
    onEnter: function(args) {
        var prop = Memory.readCString(args[0]);
        var v = Memory.readCString(args[1]);
        if (prop in build_prop) {
            var date = new Date(); var timestamp = date.getTime();
            for (ar in args) {
                arg.push(Memory.readCString(ar));
            }
            droidmon_log("Bypass __system_property_get",{
                "class":"libc.so",
                "method":"__system_property_get",
                "timestamp": timestamp,
                "type":"content",
                "args": arg,
                "result": v,
                "hook_result": build_prop[prop]
            });
            Memory.writeUtf8String(args[1], build_prop[prop]);
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "system"), {
    onEnter: function(args) {
        var cmd = Memory.readCString(args[0]);
        send_msg("SYSTEM CMD: " + cmd);
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id") {
            var date = new Date(); var timestamp = date.getTime();
            var arg = [];
            for (ar in args) {
                arg.push(Memory.readCString(ar));
            }
            droidmon_log("Bypass system",{
                "class":"libc.so",
                "method":"system",
                "timestamp": timestamp,
                "type":"content",
                "args": arg,
                "result": cmd,
                "hook_result": "grep"
            });
            Memory.writeUtf8String(args[0], "grep");
        }
        if (cmd == "su") {
            var date = new Date(); var timestamp = date.getTime();
            var arg = [];
            for (ar in args) {
                arg.push(Memory.readCString(ar));
            }
            droidmon_log("Bypass system",{
                "class":"libc.so",
                "method":"system",
                "timestamp": timestamp,
                "type":"content",
                "args": arg,
                "result": cmd,
                "hook_result": "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"
            });
            Memory.writeUtf8String(args[0], "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled");
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
    onEnter: function(args) {
        var path = Memory.readCString(args[0]);
        path = path.split("/");
        var executable = path[path.length - 1];
        var shouldFakeReturn = (RootBinaries.indexOf(executable) > -1)
        if (shouldFakeReturn) {
            var date = new Date(); var timestamp = date.getTime();
            for (ar in args) {
                arg.push(Memory.readCString(ar));
            }
            droidmon_log("Bypass fopen",{
                "class":"libc.so",
                "method":"fopen",
                "timestamp": timestamp,
                "type":"content",
                "args": arg,
                "result": path,
                "hook_result": "/notexists"
            });
            Memory.writeUtf8String(args[0], "/notexists");
        }
    },
    onLeave: function(retval) {

    }
});//Logger
var DexFile = Java.use("dalvik.system.DexFile");// This constructor was deprecated in API level 26.
DexFile.loadDex.implementation = function (sourcePathName, outputPathName, flags) {//loadDex(String sourcePathName, String outputPathName, int flags)
    send_file(sourcePathName, "Dynamic loading dex file to : "+outputPathName);
    return this.loadDex.call(this, sourcePathName, outputPathName, flags);
};
DexFile.loadClass.implementation = function (name,  loader) {//	loadClass(String name, ClassLoader loader)
    send_msg("Dynamic loading for class : "+name);
    return this.loadClass.call(this, name, loader);
};//Anti-emulator detection
var BufferedReader = Java.use('java.io.BufferedReader');

BufferedReader.readLine.implementation = function() {
    var text = this.readLine.call(this);
    if (text === null) {
        // just pass , i know it's ugly as hell but test != null won't work :(
    } else {
        var shouldFakeRead = (text.indexOf("ro.build.tags=test-keys") > -1);
        if (shouldFakeRead) {
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass readLine",{
                "class":"java.io.BufferedReader",
                "method":"readLine",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": text,
                "hook_result": text.replace("ro.build.tags=test-keys", "ro.build.tags=release-keys")
            });
            text = text.replace("ro.build.tags=test-keys", "ro.build.tags=release-keys");
        }
    }
    return text;
};//Anti-emulator detection
var TelephonyManager = Java.use("android.telephony.TelephonyManager");
TelephonyManager.getDeviceId.overload().implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass getDeviceId",{
                "class":"android.telephony.TelephonyManager",
                "method":"getDeviceId",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": "",
                "hook_result": "098767899076561"
            });
    return "098767899076561";
};
TelephonyManager.getLine1Number.implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
     droidmon_log("Bypass getLine1Number",{
                "class":"android.telephony.TelephonyManager",
                "method":"getLine1Number",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": "",
                "hook_result": "15802920458"
            });
    return "15802920458";
};
TelephonyManager.getNetworkOperatorName.overload().implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
     droidmon_log("Bypass getNetworkOperatorName",{
                "class":"android.telephony.TelephonyManager",
                "method":"getNetworkOperatorName",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": "",
                "hook_result": "CMCC"
            });
    return "CMCC";
};
TelephonyManager.getSimSerialNumber.overload().implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
     droidmon_log("Bypass getSimSerialNumber",{
                "class":"android.telephony.TelephonyManager",
                "method":"getSimSerialNumber",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": "",
                "hook_result": "89014103211118510799"
            });
    return "89014103211118510799";
};//Anti-emulator detection
var ActivityManager = Java.use("android.app.ActivityManager");
ActivityManager.isUserAMonkey.implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
    droidmon_log("Bypass isUserAMonkey",{
        "class":"android.app.ActivityManager",
        "method":"isUserAMonkey",
        "timestamp": timestamp,
        "type":"content",
        "args":"",
        "result": this.isUserAMonkey.call(this),
        "hook_result": false
    });
    return false;
};//Anti-emulator detection
var NetworkInterface = Java.use("java.net.NetworkInterface");
NetworkInterface.getName.implementation = function () {
    if (this.getName.call(this) == "eth0"){
        var date = new Date(); var timestamp = date.getTime();
        droidmon_log("Bypass getName",{
                "class":"java.net.NetworkInterface",
                "method":"getName",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": this.getName.call(this),
                "hook_result": "wan0"
        });
        return "wan0";
    }
    return this.getName.call(this);
};//Anti-emulator detection
var SystemProperties = Java.use('android.os.SystemProperties');
SystemProperties.get.overload('java.lang.String').implementation = function (key) {
    if (key in build_prop) {
        var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass get",{
                "class":"android.os.SystemProperties",
                "method":"get",
                "timestamp": timestamp,
                "type":"content",
                "args": key,
                "result": this.get.call(this, key),
                "hook_result": build_prop[key]
            });
        return build_prop[key];
    }
    return this.get.call(this, key);
};//Anti-emulator detection
var wifiInfo = Java.use("android.net.wifi.WifiInfo");
wifiInfo.getMacAddress.implementation = function () {
    var date = new Date(); var timestamp = date.getTime();
    droidmon_log("Bypass getMacAddress",{
        "class":"android.net.wifi.WifiInfo",
        "method":"getMacAddress",
        "timestamp": timestamp,
        "type":"content",
        "args":"",
        "result": this.getMacAddress.call(this),
        "hook_result": "00:26:37:17:3C:71"
    });
    return "00:26:37:17:3C:71";
};

var WifiManager = Java.use("android.net.wifi.WifiManager");
Java.use("android.app.Activity").onCreate.overload("android.os.Bundle").implementation = function(bundle) {
    var wManager = Java.cast(this.getSystemService("wifi"), WifiManager);
    send_msg('isWifiEnabled ?', wManager.isWifiEnabled());
    wManager.setWifiEnabled(true);
    this.$init(bundle);
}//Anti-emulator detection && Logger
var IOBridge = Java.use('libcore.io.IoBridge');
IOBridge.open.implementation = function(path, flags) {
    var Binder = Java.use("android.os.Binder");
    var uid = Binder.getCallingUid();
    send_msg("Try to open :" + path + " with uid : "+uid);
    if (uid > 10000 && uid < 99999) {
        if (path == "/system/build.prop") {
            //send_msg("Bypass IoBridge.open check " + path);
            var new_path = "/data/local/tmp/fake-build.prop";
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass open",{
                "class":"libcore.io.IoBridge",
                "method":"open",
                "timestamp": timestamp,
                "type":"content",
                "args": [path, flags],
                "result": path,
                "hook_result": new_path
            });
            return this.open.call(this, new_path, flags);
        }
        if (path == "/proc/tty/drivers") {
            //send_msg("Bypass IoBridge.open check " + path);
            var new_path = "/data/local/tmp/fake-drivers";
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass open",{
                "class":"libcore.io.IoBridge",
                "method":"open",
                "timestamp": timestamp,
                "type":"content",
                "args": [path, flags],
                "result": path,
                "hook_result": new_path
            });
            return this.open.call(this, new_path, flags);
        }
        if (path == "/proc/cpuinfo") {
            //send_msg("Bypass IoBridge.open check " + path);
            var new_path = "/data/local/tmp/fake-cpuinfo";
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass open",{
                "class":"libcore.io.IoBridge",
                "method":"open",
                "timestamp": timestamp,
                "type":"content",
                "args": [path, flags],
                "result": path,
                "hook_result": new_path
            });
            return this.open.call(this, new_path, flags);
        }
        //send_file(path, "Test");
    }
    return this.open.call(this, path, flags);
};//Anti-emulator detection
var boolean_map = {"test-keys": false, "unknown": false};
var String = Java.use('java.lang.String');
String.contains.implementation = function(name) {
    if (name in boolean_map) {
        if (this.contains.call(this, name)){
            var date = new Date(); var timestamp = date.getTime();
            droidmon_log("Bypass contains",{
                "class":"java.lang.String",
                "method":"contains",
                "timestamp": timestamp,
                "type":"content",
                "args": name,
                "result": this.contains.call(this, name),
                "hook_result": boolean_map[name]
            });
            return boolean_map[name];
        }
    }
    return this.contains.call(this, name);
};//Anti-emulator detection
var FileIO = Java.use('java.io.File');
FileIO.exists.implementation = function() {
    var name = File.getName.call(this);
    var shouldFakeReturn = (RootBinaries.indexOf(name) > -1)
    if (shouldFakeReturn) {
        var date = new Date(); var timestamp = date.getTime();
        droidmon_log("Bypass exists",{
                "class":"java.io.File",
                "method":"exists",
                "timestamp": timestamp,
                "type":"content",
                "args": "",
                "result": this.exists.call(this),
                "hook_result": false
        });
        return false;
    } else {
        return this.exists.call(this);
    }
}; });}
    ,
 
    debug : function() {
        function send_msg(msg){send({"type":"msg", "Process" : Process.id, "message" :  msg});};
        send_msg("Frida Server Version : "+Frida.version);
        send_msg("Frida Heap Size : "+Frida.heapSize);
        Process.enumerateModulesSync().forEach(function (m) {
            send_msg(m.name);
        });
    }
    ,

    modules : function() {
        function send_log(log_content, msg){
        send({"type":"log", "Process" : Process.id, "log": log_content , "title" : "list_modules", "message":msg});
        };
        var log_c = "";
        Module.enumerateExportsSync("libc.so").forEach(function (l) {
            log_c += JSON.stringify(l, null, ' ') + '\n';
        });
        send_log(log_c, "sending lib_modules contents");
    }
     };
     }).call(this);
    