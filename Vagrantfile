Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true
  config.vm.synced_folder ".", "/vagrant"
  config.vm.box_check_update = false

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL
    # make sure we always cd to the project dir on login
    echo "cd /vagrant" >> /home/vagrant/.bashrc

    # install dependencies
    add-apt-repository ppa:openjdk-r/ppa -y
    curl -sL http://deb.nodesource.com/setup_7.x | bash -
    apt-get -y install build-essential nodejs git

    # bypass node_modules on host
    # Source: https://medium.com/@dtinth/isolating-node-modules-in-vagrant-9e646067b36
    su vagrant -c 'mkdir ~/node_modules'
    mount --bind /home/vagrant/node_modules /vagrant/node_modules

    # install node modules
    cd /vagrant
    npm install
  SHELL

  config.trigger.before :ssh do
    info "Mounting node_modules..."
    run_remote <<-SHELL
      mkdir -p /vagrant/node_modules;
      mkdir -p /home/vagrant/node_modules;
      mountpoint -q /vagrant/node_modules || sudo mount --bind /home/vagrant/node_modules /vagrant/node_modules;
    SHELL
    info "node_modules mounted."
  end
end
