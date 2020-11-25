require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNUMeng"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/gaoyunch/react-native-umeng.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm}"
  
  s.dependency 'React'
  s.dependency 'UMCCommon'
  s.dependency 'UMCPush'
  s.dependency 'UMCSecurityPlugins'
end
