class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
        return a - b;
      });
      return args[0];
    }
  }