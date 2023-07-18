const mockCircle = () => {
    return {
      render() {
        return "<circle cx=\"150\" cy=\"150\" r=\"50\" fill=\"black\"/>";
      },
    };
  };

  const mockSquare = () => {
    return {
      render() {
        return "<rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" fill=\"black\"/>";
      },
    };
  };

  const mockTriangle = () => {
    return {
      render() {
        return "<polygon points=\"150, 18 244, 182 56, 182\" fill=\"black\"/>";
      },
    };
  };