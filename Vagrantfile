Vagrant.configure("2") do |config|
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true
  config.vm.provider "docker" do |d|
    d.build_dir = "./"
  end
end
