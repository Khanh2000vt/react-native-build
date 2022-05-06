# Các Setup React Native không dùng Expo
* https://reactnative.dev/docs/typescript
## Chuẩn bị
1. Android Studio: https://developer.android.com/studio
2. JDK: https://www.oracle.com/java/technologies/downloads/
- Nên dùng JDK phiên bản 11
- Cài Path JAVA_HOME: https://shareprogramming.net/cach-dat-bien-moi-truong-java_home-trong-windows-10/
3. Thiết lập Path tới adb: với đường dẫn C:\Users\ASUS\AppData\Local\Android\Sdk\platform-tools
* Link tham khảo: https://stackoverflow.com/questions/20564514/adb-is-not-recognized-as-an-internal-or-external-command-operable-program-or
* Thử lệnh `adb devices` trong `cmd` để kiểm tra thiết bị kết nối.

## Xây dựng
1. Mở `Android Studio`.
2. Ấn vào `Open Project`, xong trỏ vào `MyProject/android/`
3. Mở chế độ cho nhà phát triển trên điện thoại.
4. Build Project trong `Android Studio`.
* Sau khi lệnh này thì điện thoại sẽ thông báo lỗi không chạy được ứng dụng. Giờ thì vào VSCode để chạy `yarn android`.

## Các lỗi thường gặp khi xây dựng bằng Typescripts
1. https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier

# Các thứ linh tinh
## Set màu tab Bar khi chọn
```js
tabBarIndicatorStyle: {
  height: null,
  top: 0,
  backgroundColor: 'red',
  borderBottomWidth: 0,
},
```
## Độ cao
```css
elevation: 10,
```

# Modal
## Opening a full-screen modal
```js
<Stack.Screen name="NameScreen" component={NameScreen}
  options={{
    title: 'Type',
    presentation: 'modal'}} />
```

## A half modal react
* Ở stack navigation
```js
<Stack.Screen name="NameScreen" component={NameScreen}
  options={{
    headerShown: false,
    presentation: 'transparentModal',
   }}/>
```
* Ở NameScreen
```js
<Pressable
  style={[
    StyleSheet.absoluteFill,
    {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
   ]}
  onPress={navigation.goBack}
/>
```
## Ẩn tab bar
```js
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
```
```js
const tabHiddenRoutes = ['TypeScreen', 'RepeatScreen', 'AboutScreen']; // Các NameScreen muốn ẩn tab bar
  if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
```

## Các thư viện khác
* Jest
> https://jestjs.io/
* Call API
> https://github.com/axios/axios
