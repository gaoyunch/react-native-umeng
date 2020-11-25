import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Analytices, DeviceInfo, Push } from 'react-native-umeng';

export default function App() {
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo | undefined>(undefined);
  const [deviceToken, setDeviceToken] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      const deviceInfo = await Analytices.getDeviceInfo();
      setDeviceInfo(deviceInfo);
      Analytices.sendEvent("Test")

      Push.addListener("register", (data) => {
        setDeviceToken(data?.deviceToken);
        console.log("🚀 ~ file: App.tsx ~ register ~ Push.addListener ~ data", data)
      })
      Push.addListener("remoteNotification", (data) => {
        console.log("🚀 ~ file: App.tsx ~ remoteNotification ~ Push.addListener ~ data", data)
      })
      Push.addListener("message", (data) => {
        console.log("🚀 ~ file: App.tsx ~ message ~ Push.addListener ~ data", data)
      })
      Push.start();
      // 向指定用户推送消息
      Push.removeAlias("USERID", "1");
      Push.setAlias("1", "USERID");
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text>CHANNEL: {Analytices.CHANNEL}</Text>
      <Text>设备ID：{deviceInfo?.deviceId}</Text>
      <Text>设备Mac：{deviceInfo?.mac}</Text>
      <Text>设备Token：{deviceToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
