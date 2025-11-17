// Selus Question Bank - Comprehensive Grade 12 Exam Questions
// 5 Subjects × 5 Years × 20 Questions = 500 Total Questions

const QUESTION_BANK = {
  MATHS: {
    2013: [
      {
        question: "What is the value of x in the equation: 3x + 7 = 22?",
        options: ["x = 3", "x = 5", "x = 7", "x = 9"],
        correct: 1,
        hint: "Subtract 7 from both sides first, then divide by 3.",
        explanation: "To solve 3x + 7 = 22: Subtract 7: 3x = 15, then divide by 3: x = 5"
      },
      {
        question: "What is the derivative of f(x) = 4x³ - 2x + 5?",
        options: ["12x² - 2", "12x² + 2", "4x² - 2", "12x³ - 2x"],
        correct: 0,
        hint: "Use the power rule: d/dx(xⁿ) = nxⁿ⁻¹",
        explanation: "Applying power rule: f'(x) = 12x² - 2 + 0 = 12x² - 2"
      },
      {
        question: "If sin θ = 0.6 and θ is in the first quadrant, what is cos θ?",
        options: ["0.8", "0.6", "0.4", "0.2"],
        correct: 0,
        hint: "Use the Pythagorean identity: sin²θ + cos²θ = 1",
        explanation: "0.6² + cos²θ = 1, so cos²θ = 0.64, therefore cos θ = 0.8"
      },
      {
        question: "What is the area of a circle with radius 5 cm?",
        options: ["25π cm²", "10π cm²", "50π cm²", "5π cm²"],
        correct: 0,
        hint: "Area = πr²",
        explanation: "A = π(5)² = 25π cm²"
      },
      {
        question: "Solve for x: 2^(x+1) = 32",
        options: ["x = 4", "x = 5", "x = 3", "x = 6"],
        correct: 0,
        hint: "Convert 32 to a power of 2",
        explanation: "32 = 2⁵, so x + 1 = 5, therefore x = 4"
      },
      {
        question: "What is the slope of the line 3x - 4y = 12?",
        options: ["3/4", "-3/4", "4/3", "-4/3"],
        correct: 0,
        hint: "Convert to slope-intercept form y = mx + b",
        explanation: "4y = 3x - 12, y = (3/4)x - 3, slope m = 3/4"
      },
      {
        question: "Calculate: ∫ 6x² dx",
        options: ["2x³ + C", "6x³ + C", "18x² + C", "3x³ + C"],
        correct: 0,
        hint: "Use the power rule for integration",
        explanation: "∫ 6x² dx = 6(x³/3) + C = 2x³ + C"
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["55", "45", "50", "60"],
        correct: 0,
        hint: "Use the formula n(n+1)/2",
        explanation: "Sum = 10(11)/2 = 55"
      },
      {
        question: "If log₂ 8 = x, what is x?",
        options: ["3", "2", "4", "8"],
        correct: 0,
        hint: "2 raised to what power equals 8?",
        explanation: "2³ = 8, so log₂ 8 = 3"
      },
      {
        question: "What is the volume of a cube with side length 4 cm?",
        options: ["64 cm³", "16 cm³", "48 cm³", "32 cm³"],
        correct: 0,
        hint: "Volume = side³",
        explanation: "V = 4³ = 64 cm³"
      },
      {
        question: "Simplify: (x + 3)(x - 3)",
        options: ["x² - 9", "x² + 9", "x² - 6x - 9", "x² + 6x + 9"],
        correct: 0,
        hint: "Use difference of squares formula",
        explanation: "(a + b)(a - b) = a² - b², so (x + 3)(x - 3) = x² - 9"
      },
      {
        question: "What is the median of: 3, 7, 2, 9, 5?",
        options: ["5", "7", "6", "4"],
        correct: 0,
        hint: "Arrange in order first",
        explanation: "Ordered: 2, 3, 5, 7, 9. Middle value is 5"
      },
      {
        question: "Find the distance between points (2, 3) and (6, 6):",
        options: ["5", "4", "7", "3"],
        correct: 0,
        hint: "Use distance formula: √[(x₂-x₁)² + (y₂-y₁)²]",
        explanation: "d = √[(6-2)² + (6-3)²] = √[16 + 9] = √25 = 5"
      },
      {
        question: "What is 15% of 200?",
        options: ["30", "25", "35", "20"],
        correct: 0,
        hint: "15% = 0.15",
        explanation: "0.15 × 200 = 30"
      },
      {
        question: "Solve: |x - 4| = 6",
        options: ["x = 10 or x = -2", "x = 10", "x = -2", "x = 2 or x = 10"],
        correct: 0,
        hint: "Absolute value creates two equations",
        explanation: "x - 4 = 6 gives x = 10, or x - 4 = -6 gives x = -2"
      },
      {
        question: "What is the next term in the sequence: 2, 6, 12, 20, ...?",
        options: ["30", "28", "32", "26"],
        correct: 0,
        hint: "Look at the differences between terms",
        explanation: "Differences are 4, 6, 8, ..., next is 10, so 20 + 10 = 30"
      },
      {
        question: "If f(x) = 2x + 3, what is f(5)?",
        options: ["13", "10", "15", "11"],
        correct: 0,
        hint: "Substitute x = 5",
        explanation: "f(5) = 2(5) + 3 = 10 + 3 = 13"
      },
      {
        question: "What is the perimeter of a rectangle with length 8 and width 5?",
        options: ["26", "40", "13", "24"],
        correct: 0,
        hint: "Perimeter = 2(length + width)",
        explanation: "P = 2(8 + 5) = 2(13) = 26"
      },
      {
        question: "Simplify: √48",
        options: ["4√3", "3√4", "2√12", "6√2"],
        correct: 0,
        hint: "Factor out perfect squares",
        explanation: "√48 = √(16×3) = 4√3"
      },
      {
        question: "What is the probability of rolling a sum of 7 with two dice?",
        options: ["1/6", "1/12", "1/4", "1/8"],
        correct: 0,
        hint: "Count favorable outcomes (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)",
        explanation: "6 favorable outcomes out of 36 total: 6/36 = 1/6"
      }
    ],
    2014: [
      {
        question: "Solve for y: 5y - 3 = 2y + 12",
        options: ["y = 5", "y = 3", "y = 7", "y = 4"],
        correct: 0,
        hint: "Collect all y terms on one side",
        explanation: "5y - 2y = 12 + 3, 3y = 15, y = 5"
      },
      {
        question: "What is the value of cos(60°)?",
        options: ["1/2", "√3/2", "1", "√2/2"],
        correct: 0,
        hint: "This is a standard angle",
        explanation: "cos(60°) = 1/2"
      },
      {
        question: "If a² + b² = 25 and a = 3, what is b?",
        options: ["4", "5", "3", "6"],
        correct: 0,
        hint: "Assume b is positive",
        explanation: "9 + b² = 25, b² = 16, b = 4"
      },
      {
        question: "What is the formula for the quadratic equation?",
        options: ["x = (-b ± √(b²-4ac))/2a", "x = (b ± √(b²-4ac))/2a", "x = (-b ± √(b²+4ac))/2a", "x = (b ± √(b²+4ac))/2a"],
        correct: 0,
        hint: "Remember the standard form ax² + bx + c = 0",
        explanation: "The quadratic formula is x = (-b ± √(b²-4ac))/2a"
      },
      {
        question: "Expand: (2x + 1)²",
        options: ["4x² + 4x + 1", "4x² + 2x + 1", "2x² + 4x + 1", "4x² + 1"],
        correct: 0,
        hint: "Use (a + b)² = a² + 2ab + b²",
        explanation: "(2x)² + 2(2x)(1) + 1² = 4x² + 4x + 1"
      },
      {
        question: "What is the range of y = x²?",
        options: ["y ≥ 0", "All real numbers", "y > 0", "y ≤ 0"],
        correct: 0,
        hint: "Squares are always non-negative",
        explanation: "x² is always ≥ 0, so range is y ≥ 0"
      },
      {
        question: "Calculate: d/dx(sin x)",
        options: ["cos x", "-cos x", "sin x", "-sin x"],
        correct: 0,
        hint: "Standard derivative",
        explanation: "The derivative of sin x is cos x"
      },
      {
        question: "What is 2⁵?",
        options: ["32", "16", "64", "128"],
        correct: 0,
        hint: "Multiply 2 five times",
        explanation: "2×2×2×2×2 = 32"
      },
      {
        question: "Solve: x/3 = 12",
        options: ["x = 36", "x = 4", "x = 9", "x = 15"],
        correct: 0,
        hint: "Multiply both sides by 3",
        explanation: "x = 12 × 3 = 36"
      },
      {
        question: "What is the circumference of a circle with diameter 10?",
        options: ["10π", "20π", "5π", "100π"],
        correct: 0,
        hint: "C = πd",
        explanation: "C = π(10) = 10π"
      },
      {
        question: "Factor: x² - 16",
        options: ["(x + 4)(x - 4)", "(x + 2)(x - 8)", "(x - 4)²", "(x + 16)(x - 1)"],
        correct: 0,
        hint: "Difference of squares",
        explanation: "x² - 16 = (x + 4)(x - 4)"
      },
      {
        question: "What is the mean of: 4, 8, 6, 2, 10?",
        options: ["6", "5", "7", "8"],
        correct: 0,
        hint: "Sum all values and divide by count",
        explanation: "(4 + 8 + 6 + 2 + 10)/5 = 30/5 = 6"
      },
      {
        question: "Simplify: 3(x + 2) - 2(x - 1)",
        options: ["x + 8", "x + 4", "5x + 4", "x + 6"],
        correct: 0,
        hint: "Distribute then combine like terms",
        explanation: "3x + 6 - 2x + 2 = x + 8"
      },
      {
        question: "What is 25% of 80?",
        options: ["20", "25", "15", "30"],
        correct: 0,
        hint: "25% = 1/4",
        explanation: "0.25 × 80 = 20, or 80/4 = 20"
      },
      {
        question: "If 2ˣ = 16, what is x?",
        options: ["4", "2", "8", "3"],
        correct: 0,
        hint: "16 = 2⁴",
        explanation: "2⁴ = 16, so x = 4"
      },
      {
        question: "What is the slope of a horizontal line?",
        options: ["0", "1", "Undefined", "-1"],
        correct: 0,
        hint: "Horizontal lines don't rise",
        explanation: "Slope = rise/run = 0/run = 0"
      },
      {
        question: "Calculate: ∫ 4 dx",
        options: ["4x + C", "4 + C", "x + C", "0"],
        correct: 0,
        hint: "Integral of a constant",
        explanation: "∫ 4 dx = 4x + C"
      },
      {
        question: "What is the surface area of a cube with side 3?",
        options: ["54", "27", "18", "9"],
        correct: 0,
        hint: "6 faces, each with area s²",
        explanation: "SA = 6(3²) = 6(9) = 54"
      },
      {
        question: "Evaluate: |−7|",
        options: ["7", "-7", "0", "14"],
        correct: 0,
        hint: "Absolute value is always positive",
        explanation: "|−7| = 7"
      },
      {
        question: "What is the next prime number after 7?",
        options: ["11", "9", "10", "13"],
        correct: 0,
        hint: "Check divisibility starting from 8",
        explanation: "8, 9, 10 are not prime. 11 is prime."
      }
    ],
    2015: [
      {
        question: "Solve the system: x + y = 10 and x - y = 2",
        options: ["x = 6, y = 4", "x = 5, y = 5", "x = 7, y = 3", "x = 8, y = 2"],
        correct: 0,
        hint: "Add the two equations to eliminate y",
        explanation: "Adding: 2x = 12, so x = 6. Then y = 4"
      },
      {
        question: "What is tan(45°)?",
        options: ["1", "√3", "1/2", "√2"],
        correct: 0,
        hint: "sin(45°) = cos(45°)",
        explanation: "tan(45°) = sin(45°)/cos(45°) = 1"
      },
      {
        question: "Find the vertex of y = x² - 4x + 3",
        options: ["(2, -1)", "(1, 0)", "(3, 0)", "(2, 3)"],
        correct: 0,
        hint: "x-coordinate: -b/2a",
        explanation: "x = 4/2 = 2, y = 4 - 8 + 3 = -1"
      },
      {
        question: "What is ln(e²)?",
        options: ["2", "e", "1", "e²"],
        correct: 0,
        hint: "ln and e are inverse functions",
        explanation: "ln(e²) = 2ln(e) = 2(1) = 2"
      },
      {
        question: "Simplify: (x³)⁴",
        options: ["x¹²", "x⁷", "x⁶⁴", "x³⁴"],
        correct: 0,
        hint: "Multiply exponents",
        explanation: "(x³)⁴ = x³ˣ⁴ = x¹²"
      },
      {
        question: "What is the domain of f(x) = 1/x?",
        options: ["x ≠ 0", "All real numbers", "x > 0", "x ≥ 0"],
        correct: 0,
        hint: "Can't divide by zero",
        explanation: "Division by zero is undefined, so x ≠ 0"
      },
      {
        question: "Calculate: d/dx(x⁴)",
        options: ["4x³", "x³", "4x⁴", "x⁵"],
        correct: 0,
        hint: "Power rule",
        explanation: "d/dx(x⁴) = 4x³"
      },
      {
        question: "What is √(144)?",
        options: ["12", "14", "10", "16"],
        correct: 0,
        hint: "What number squared equals 144?",
        explanation: "12² = 144, so √144 = 12"
      },
      {
        question: "Solve: 3x = 27",
        options: ["x = 9", "x = 3", "x = 81", "x = 24"],
        correct: 0,
        hint: "Divide both sides by 3",
        explanation: "x = 27/3 = 9"
      },
      {
        question: "What is the area of a triangle with base 10 and height 6?",
        options: ["30", "60", "16", "15"],
        correct: 0,
        hint: "A = (1/2)bh",
        explanation: "A = (1/2)(10)(6) = 30"
      },
      {
        question: "Factor: x² + 5x + 6",
        options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x - 2)(x - 3)", "(x + 6)(x - 1)"],
        correct: 0,
        hint: "Find two numbers that multiply to 6 and add to 5",
        explanation: "2 and 3 work: (x + 2)(x + 3)"
      },
      {
        question: "What is the mode of: 3, 5, 3, 7, 3, 9?",
        options: ["3", "5", "7", "No mode"],
        correct: 0,
        hint: "Mode is the most frequent value",
        explanation: "3 appears three times, more than any other"
      },
      {
        question: "Simplify: 2x + 3x",
        options: ["5x", "6x", "5x²", "2x³"],
        correct: 0,
        hint: "Combine like terms",
        explanation: "2x + 3x = 5x"
      },
      {
        question: "What is 50% of 60?",
        options: ["30", "25", "35", "20"],
        correct: 0,
        hint: "50% = 1/2",
        explanation: "0.5 × 60 = 30"
      },
      {
        question: "If log₃ x = 2, what is x?",
        options: ["9", "3", "6", "8"],
        correct: 0,
        hint: "3² = ?",
        explanation: "3² = 9, so x = 9"
      },
      {
        question: "What is the slope of a vertical line?",
        options: ["Undefined", "0", "1", "∞"],
        correct: 0,
        hint: "Vertical lines have infinite rise",
        explanation: "Slope = rise/run = rise/0, which is undefined"
      },
      {
        question: "Calculate: ∫ x dx",
        options: ["x²/2 + C", "x² + C", "x + C", "2x + C"],
        correct: 0,
        hint: "Power rule for integration",
        explanation: "∫ x dx = x²/2 + C"
      },
      {
        question: "What is the volume of a sphere with radius 3?",
        options: ["36π", "27π", "12π", "9π"],
        correct: 0,
        hint: "V = (4/3)πr³",
        explanation: "V = (4/3)π(3³) = (4/3)π(27) = 36π"
      },
      {
        question: "Evaluate: (−3)²",
        options: ["9", "-9", "6", "-6"],
        correct: 0,
        hint: "Square the entire number",
        explanation: "(−3)² = (−3)(−3) = 9"
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correct: 0,
        hint: "This is a fundamental property",
        explanation: "The sum of angles in any triangle is 180°"
      }
    ],
    2016: [
      {
        question: "Solve: 4x - 7 = 2x + 5",
        options: ["x = 6", "x = 3", "x = 12", "x = -1"],
        correct: 0,
        hint: "Collect x terms on one side",
        explanation: "2x = 12, so x = 6"
      },
      {
        question: "What is sin(30°)?",
        options: ["1/2", "√3/2", "1", "√2/2"],
        correct: 0,
        hint: "Standard angle",
        explanation: "sin(30°) = 1/2"
      },
      {
        question: "If f(x) = x² - 4, what is f(3)?",
        options: ["5", "9", "13", "1"],
        correct: 0,
        hint: "Substitute x = 3",
        explanation: "f(3) = 9 - 4 = 5"
      },
      {
        question: "What is e⁰?",
        options: ["1", "0", "e", "∞"],
        correct: 0,
        hint: "Any number to the power 0",
        explanation: "Any number (except 0) to the power 0 equals 1"
      },
      {
        question: "Expand: (x - 2)²",
        options: ["x² - 4x + 4", "x² + 4x + 4", "x² - 4", "x² - 2x + 4"],
        correct: 0,
        hint: "Use (a - b)² = a² - 2ab + b²",
        explanation: "x² - 2(x)(2) + 4 = x² - 4x + 4"
      },
      {
        question: "What is the inverse of f(x) = 2x + 3?",
        options: ["(x - 3)/2", "2x - 3", "x/2 - 3", "(x + 3)/2"],
        correct: 0,
        hint: "Swap x and y, then solve for y",
        explanation: "x = 2y + 3, so y = (x - 3)/2"
      },
      {
        question: "Calculate: d/dx(cos x)",
        options: ["-sin x", "sin x", "-cos x", "cos x"],
        correct: 0,
        hint: "Standard derivative",
        explanation: "The derivative of cos x is -sin x"
      },
      {
        question: "What is 10³?",
        options: ["1000", "100", "10000", "30"],
        correct: 0,
        hint: "Multiply 10 three times",
        explanation: "10×10×10 = 1000"
      },
      {
        question: "Solve: 2x + 5 = 15",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 20"],
        correct: 0,
        hint: "Subtract 5, then divide by 2",
        explanation: "2x = 10, so x = 5"
      },
      {
        question: "What is the diagonal of a square with side 1?",
        options: ["√2", "1", "2", "1/√2"],
        correct: 0,
        hint: "Use Pythagoras",
        explanation: "d² = 1² + 1² = 2, so d = √2"
      },
      {
        question: "Factor: x² - 25",
        options: ["(x + 5)(x - 5)", "(x - 5)²", "(x + 25)(x - 1)", "Cannot factor"],
        correct: 0,
        hint: "Difference of squares",
        explanation: "x² - 25 = (x + 5)(x - 5)"
      },
      {
        question: "What is the standard deviation concept?",
        options: ["Measure of spread", "Average", "Middle value", "Sum of values"],
        correct: 0,
        hint: "What does it measure?",
        explanation: "Standard deviation measures how spread out data is"
      },
      {
        question: "Simplify: x/x (where x ≠ 0)",
        options: ["1", "x", "0", "2x"],
        correct: 0,
        hint: "Any number divided by itself",
        explanation: "x/x = 1 for x ≠ 0"
      },
      {
        question: "What is 75% of 40?",
        options: ["30", "25", "35", "20"],
        correct: 0,
        hint: "75% = 3/4",
        explanation: "0.75 × 40 = 30"
      },
      {
        question: "If 3ˣ = 81, what is x?",
        options: ["4", "3", "27", "5"],
        correct: 0,
        hint: "81 = 3⁴",
        explanation: "3⁴ = 81, so x = 4"
      },
      {
        question: "What is the y-intercept of y = 3x - 5?",
        options: ["-5", "3", "5", "0"],
        correct: 0,
        hint: "Set x = 0",
        explanation: "When x = 0, y = -5"
      },
      {
        question: "Calculate: ∫ 2x dx",
        options: ["x² + C", "2x² + C", "x + C", "x²/2 + C"],
        correct: 0,
        hint: "Power rule",
        explanation: "∫ 2x dx = 2(x²/2) + C = x² + C"
      },
      {
        question: "What is the lateral surface area of a cylinder (radius r, height h)?",
        options: ["2πrh", "πr²h", "2πr²", "πrh"],
        correct: 0,
        hint: "Unroll the cylinder",
        explanation: "Lateral area = circumference × height = 2πrh"
      },
      {
        question: "Evaluate: |-5| + |3|",
        options: ["8", "2", "-2", "-8"],
        correct: 0,
        hint: "Absolute values are positive",
        explanation: "|-5| + |3| = 5 + 3 = 8"
      },
      {
        question: "How many sides does a hexagon have?",
        options: ["6", "5", "7", "8"],
        correct: 0,
        hint: "Hex means six",
        explanation: "A hexagon has 6 sides"
      }
    ],
    2017: [
      {
        question: "Solve: 6x + 4 = 2x + 20",
        options: ["x = 4", "x = 6", "x = 3", "x = 8"],
        correct: 0,
        hint: "Collect like terms",
        explanation: "4x = 16, so x = 4"
      },
      {
        question: "What is cos(0°)?",
        options: ["1", "0", "−1", "∞"],
        correct: 0,
        hint: "Cosine at 0 degrees",
        explanation: "cos(0°) = 1"
      },
      {
        question: "What is the discriminant of ax² + bx + c?",
        options: ["b² - 4ac", "b² + 4ac", "-b ± √(b² - 4ac)", "4ac - b²"],
        correct: 0,
        hint: "Part of quadratic formula under the square root",
        explanation: "Discriminant = b² - 4ac"
      },
      {
        question: "Simplify: log₁₀ 1000",
        options: ["3", "10", "1000", "100"],
        correct: 0,
        hint: "10³ = 1000",
        explanation: "log₁₀ 1000 = log₁₀ 10³ = 3"
      },
      {
        question: "What is (3x²)(2x³)?",
        options: ["6x⁵", "6x⁶", "5x⁵", "6x"],
        correct: 0,
        hint: "Multiply coefficients, add exponents",
        explanation: "3×2 = 6, x² × x³ = x⁵"
      },
      {
        question: "What is the period of sin(x)?",
        options: ["2π", "π", "π/2", "4π"],
        correct: 0,
        hint: "When does sine repeat?",
        explanation: "sin(x) repeats every 2π radians"
      },
      {
        question: "Calculate: d/dx(e^x)",
        options: ["e^x", "xe^(x-1)", "1", "x"],
        correct: 0,
        hint: "Special property of e",
        explanation: "The derivative of e^x is e^x itself"
      },
      {
        question: "What is (-2)³?",
        options: ["-8", "8", "-6", "6"],
        correct: 0,
        hint: "Cube the negative number",
        explanation: "(-2)³ = (-2)(-2)(-2) = -8"
      },
      {
        question: "Solve: x/4 = 7",
        options: ["x = 28", "x = 3", "x = 11", "x = 1.75"],
        correct: 0,
        hint: "Multiply both sides by 4",
        explanation: "x = 7 × 4 = 28"
      },
      {
        question: "What is the hypotenuse of a right triangle with legs 3 and 4?",
        options: ["5", "7", "6", "25"],
        correct: 0,
        hint: "Use Pythagoras: c² = a² + b²",
        explanation: "c² = 9 + 16 = 25, so c = 5"
      },
      {
        question: "Factor: 2x² + 8x",
        options: ["2x(x + 4)", "2(x² + 4x)", "x(2x + 8)", "2x² + 8x cannot factor"],
        correct: 0,
        hint: "Factor out GCF",
        explanation: "GCF is 2x: 2x(x + 4)"
      },
      {
        question: "What does correlation measure?",
        options: ["Relationship between variables", "Average", "Spread", "Frequency"],
        correct: 0,
        hint: "How variables relate to each other",
        explanation: "Correlation measures the relationship between two variables"
      },
      {
        question: "Simplify: (x²y³)(x³y)",
        options: ["x⁵y⁴", "x⁵y³", "x⁶y⁴", "x²y³"],
        correct: 0,
        hint: "Add exponents of like bases",
        explanation: "x²⁺³ × y³⁺¹ = x⁵y⁴"
      },
      {
        question: "What is 20% of 150?",
        options: ["30", "20", "40", "25"],
        correct: 0,
        hint: "20% = 1/5",
        explanation: "0.2 × 150 = 30"
      },
      {
        question: "If 5ˣ = 125, what is x?",
        options: ["3", "5", "25", "2"],
        correct: 0,
        hint: "125 = 5³",
        explanation: "5³ = 125, so x = 3"
      },
      {
        question: "What is the x-intercept of y = 4x - 8?",
        options: ["2", "-2", "4", "8"],
        correct: 0,
        hint: "Set y = 0",
        explanation: "0 = 4x - 8, so x = 2"
      },
      {
        question: "Calculate: ∫ 3x² dx",
        options: ["x³ + C", "3x³ + C", "x² + C", "6x + C"],
        correct: 0,
        hint: "Power rule",
        explanation: "∫ 3x² dx = 3(x³/3) + C = x³ + C"
      },
      {
        question: "What is the volume of a rectangular prism (l=2, w=3, h=4)?",
        options: ["24", "12", "9", "20"],
        correct: 0,
        hint: "V = lwh",
        explanation: "V = 2×3×4 = 24"
      },
      {
        question: "Evaluate: |8 - 12|",
        options: ["4", "-4", "20", "-20"],
        correct: 0,
        hint: "Absolute value is distance from zero",
        explanation: "|8 - 12| = |-4| = 4"
      },
      {
        question: "What is the sum of interior angles in a quadrilateral?",
        options: ["360°", "180°", "540°", "720°"],
        correct: 0,
        hint: "A quadrilateral can be divided into 2 triangles",
        explanation: "2 × 180° = 360°"
      }
    ]
  },
  
  BIOLOGY: {
    2013: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
        correct: 0,
        hint: "It produces ATP through cellular respiration",
        explanation: "Mitochondria generate most of the cell's ATP through aerobic respiration"
      },
      {
        question: "Which molecule carries genetic information?",
        options: ["DNA", "Protein", "Lipid", "Carbohydrate"],
        correct: 0,
        hint: "It's a double helix structure",
        explanation: "DNA (Deoxyribonucleic Acid) carries genetic information in all living organisms"
      },
      {
        question: "What is the process by which plants make food?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        correct: 0,
        hint: "It requires sunlight, water, and carbon dioxide",
        explanation: "Photosynthesis converts light energy into chemical energy (glucose)"
      },
      {
        question: "How many chromosomes do humans have?",
        options: ["46", "23", "48", "92"],
        correct: 0,
        hint: "23 pairs",
        explanation: "Humans have 46 chromosomes (23 pairs): 22 autosomes + 2 sex chromosomes"
      },
      {
        question: "What is the basic unit of life?",
        options: ["Cell", "Atom", "Tissue", "Organ"],
        correct: 0,
        hint: "All living things are made of these",
        explanation: "The cell is the smallest unit that can perform all life processes"
      },
      {
        question: "Which blood type is the universal donor?",
        options: ["O negative", "AB positive", "A positive", "B negative"],
        correct: 0,
        hint: "No A, B antigens or Rh factor",
        explanation: "O negative blood has no antigens and can be given to any blood type"
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Heart", "Brain"],
        correct: 0,
        hint: "It protects us from the environment",
        explanation: "Skin covers the entire body and is the largest organ by surface area"
      },
      {
        question: "In which organelle does photosynthesis occur?",
        options: ["Chloroplast", "Mitochondria", "Nucleus", "Vacuole"],
        correct: 0,
        hint: "Found in plant cells",
        explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis"
      },
      {
        question: "What is the monomer of proteins?",
        options: ["Amino acid", "Nucleotide", "Monosaccharide", "Fatty acid"],
        correct: 0,
        hint: "Proteins are chains of these",
        explanation: "Proteins are polymers made up of amino acid monomers"
      },
      {
        question: "Which scientist proposed the theory of evolution?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
        correct: 0,
        hint: "Natural selection",
        explanation: "Charles Darwin proposed evolution by natural selection in 'Origin of Species'"
      },
      {
        question: "What is the pH of neutral water?",
        options: ["7", "0", "14", "10"],
        correct: 0,
        hint: "Middle of the pH scale",
        explanation: "pH 7 is neutral; below is acidic, above is basic"
      },
      {
        question: "Which process produces oxygen as a byproduct?",
        options: ["Photosynthesis", "Cellular respiration", "Fermentation", "Transpiration"],
        correct: 0,
        hint: "Plants do this during the day",
        explanation: "Photosynthesis splits water molecules, releasing oxygen"
      },
      {
        question: "What type of bond holds DNA strands together?",
        options: ["Hydrogen bonds", "Ionic bonds", "Covalent bonds", "Peptide bonds"],
        correct: 0,
        hint: "Weak bonds between base pairs",
        explanation: "Hydrogen bonds between complementary bases (A-T, C-G) hold DNA strands"
      },
      {
        question: "Which kingdom do mushrooms belong to?",
        options: ["Fungi", "Plantae", "Animalia", "Protista"],
        correct: 0,
        hint: "They decompose organic matter",
        explanation: "Fungi are decomposers with chitin cell walls"
      },
      {
        question: "What is the function of red blood cells?",
        options: ["Carry oxygen", "Fight infection", "Clot blood", "Regulate temperature"],
        correct: 0,
        hint: "They contain hemoglobin",
        explanation: "Red blood cells transport oxygen from lungs to tissues using hemoglobin"
      },
      {
        question: "During which phase of mitosis do chromosomes align at the center?",
        options: ["Metaphase", "Prophase", "Anaphase", "Telophase"],
        correct: 0,
        hint: "They line up in the middle",
        explanation: "Metaphase: chromosomes align at the cell's equator (metaphase plate)"
      },
      {
        question: "What is homeostasis?",
        options: ["Maintaining internal balance", "Cell division", "Energy production", "DNA replication"],
        correct: 0,
        hint: "Keeping conditions stable",
        explanation: "Homeostasis is the maintenance of stable internal conditions"
      },
      {
        question: "Which macromolecule stores genetic information?",
        options: ["Nucleic acid", "Protein", "Carbohydrate", "Lipid"],
        correct: 0,
        hint: "DNA and RNA",
        explanation: "Nucleic acids (DNA and RNA) store and transmit genetic information"
      },
      {
        question: "What is the primary function of the cell membrane?",
        options: ["Control what enters/exits", "Produce energy", "Store DNA", "Synthesize proteins"],
        correct: 0,
        hint: "It's selectively permeable",
        explanation: "The cell membrane regulates passage of substances in and out of the cell"
      },
      {
        question: "Which organelle is responsible for protein synthesis?",
        options: ["Ribosome", "Golgi apparatus", "Lysosome", "Endoplasmic reticulum"],
        correct: 0,
        hint: "Found free or attached to ER",
        explanation: "Ribosomes translate mRNA into proteins"
      }
    ],
    2014: [
      {
        question: "What is the complementary base pair to Adenine in DNA?",
        options: ["Thymine", "Cytosine", "Guanine", "Uracil"],
        correct: 0,
        hint: "A-T and C-G",
        explanation: "In DNA, Adenine pairs with Thymine via hydrogen bonds"
      },
      {
        question: "What is the site of cellular respiration?",
        options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        correct: 0,
        hint: "The powerhouse organelle",
        explanation: "Mitochondria perform cellular respiration to produce ATP"
      },
      {
        question: "Which nitrogenous base is found in RNA but not DNA?",
        options: ["Uracil", "Thymine", "Adenine", "Cytosine"],
        correct: 0,
        hint: "Replaces thymine",
        explanation: "RNA contains Uracil instead of Thymine"
      },
      {
        question: "What is the term for organisms that make their own food?",
        options: ["Autotrophs", "Heterotrophs", "Decomposers", "Parasites"],
        correct: 0,
        hint: "Self-feeders like plants",
        explanation: "Autotrophs produce organic compounds from inorganic substances"
      },
      {
        question: "How many chambers does the human heart have?",
        options: ["4", "2", "3", "6"],
        correct: 0,
        hint: "2 atria and 2 ventricles",
        explanation: "The heart has 4 chambers: right/left atrium and right/left ventricle"
      },
      {
        question: "What enzyme unzips DNA during replication?",
        options: ["Helicase", "Polymerase", "Ligase", "Primase"],
        correct: 0,
        hint: "It breaks hydrogen bonds",
        explanation: "Helicase unwinds and separates the DNA double helix"
      },
      {
        question: "Which gas do plants absorb for photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 0,
        hint: "CO₂",
        explanation: "Plants absorb CO₂ through stomata for photosynthesis"
      },
      {
        question: "What is the gestation period for humans?",
        options: ["9 months", "6 months", "12 months", "3 months"],
        correct: 0,
        hint: "About 40 weeks",
        explanation: "Human pregnancy lasts approximately 9 months or 40 weeks"
      },
      {
        question: "Which organelle contains digestive enzymes?",
        options: ["Lysosome", "Peroxisome", "Ribosome", "Vacuole"],
        correct: 0,
        hint: "Breaks down waste",
        explanation: "Lysosomes contain hydrolytic enzymes that digest cellular waste"
      },
      {
        question: "What is the fluid matrix inside mitochondria called?",
        options: ["Matrix", "Stroma", "Cytoplasm", "Nucleoplasm"],
        correct: 0,
        hint: "Where Krebs cycle occurs",
        explanation: "The matrix is the inner compartment where the Krebs cycle takes place"
      },
      {
        question: "Which blood vessels carry blood away from the heart?",
        options: ["Arteries", "Veins", "Capillaries", "Venules"],
        correct: 0,
        hint: "Think 'A' for Away",
        explanation: "Arteries carry oxygenated blood away from the heart"
      },
      {
        question: "What is the process of cell eating called?",
        options: ["Phagocytosis", "Pinocytosis", "Exocytosis", "Osmosis"],
        correct: 0,
        hint: "Large particle engulfment",
        explanation: "Phagocytosis is when cells engulf large particles"
      },
      {
        question: "Which structure regulates gene expression in eukaryotes?",
        options: ["Promoter", "Intron", "Exon", "Codon"],
        correct: 0,
        hint: "RNA polymerase binding site",
        explanation: "Promoters are DNA sequences where transcription is initiated"
      },
      {
        question: "What percentage of DNA do humans share with chimpanzees?",
        options: ["98-99%", "50%", "75%", "100%"],
        correct: 0,
        hint: "Very similar genetically",
        explanation: "Humans and chimps share approximately 98-99% of DNA"
      },
      {
        question: "Which hormone regulates blood sugar levels?",
        options: ["Insulin", "Testosterone", "Estrogen", "Adrenaline"],
        correct: 0,
        hint: "Produced by pancreas",
        explanation: "Insulin lowers blood glucose by promoting cellular uptake"
      },
      {
        question: "What is the first stage of mitosis?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
        correct: 0,
        hint: "Chromatin condenses",
        explanation: "Prophase: chromatin condenses into visible chromosomes"
      },
      {
        question: "Which type of RNA carries amino acids?",
        options: ["tRNA", "mRNA", "rRNA", "siRNA"],
        correct: 0,
        hint: "Transfer RNA",
        explanation: "tRNA transfers amino acids to ribosomes during translation"
      },
      {
        question: "What is the basic unit of the nervous system?",
        options: ["Neuron", "Nephron", "Myocyte", "Hepatocyte"],
        correct: 0,
        hint: "Nerve cell",
        explanation: "Neurons transmit electrical and chemical signals"
      },
      {
        question: "Which biomolecule is the primary energy source?",
        options: ["Carbohydrate", "Protein", "Lipid", "Nucleic acid"],
        correct: 0,
        hint: "Sugars and starches",
        explanation: "Carbohydrates like glucose are the primary energy source"
      },
      {
        question: "What is the role of the Golgi apparatus?",
        options: ["Package and modify proteins", "Produce ATP", "Synthesize lipids", "Store DNA"],
        correct: 0,
        hint: "Post office of the cell",
        explanation: "Golgi modifies, packages, and ships proteins and lipids"
      }
    ],
    2015: [
      {
        question: "What is crossing over in meiosis?",
        options: ["Exchange of genetic material", "Cell division", "DNA replication", "Protein synthesis"],
        correct: 0,
        hint: "Increases genetic variation",
        explanation: "Crossing over exchanges DNA segments between homologous chromosomes"
      },
      {
        question: "Which kingdom includes prokaryotic organisms?",
        options: ["Bacteria", "Fungi", "Plantae", "Animalia"],
        correct: 0,
        hint: "No nucleus",
        explanation: "Bacteria are prokaryotes lacking membrane-bound organelles"
      },
      {
        question: "What is the liquid component of blood called?",
        options: ["Plasma", "Serum", "Hemoglobin", "Cytoplasm"],
        correct: 0,
        hint: "About 55% of blood volume",
        explanation: "Plasma is the liquid matrix that carries blood cells"
      },
      {
        question: "Which process converts glucose to pyruvate?",
        options: ["Glycolysis", "Krebs cycle", "Electron transport", "Calvin cycle"],
        correct: 0,
        hint: "First stage of cellular respiration",
        explanation: "Glycolysis breaks down glucose into 2 pyruvate molecules"
      },
      {
        question: "What determines an individual's blood type?",
        options: ["Antigens on RBCs", "Antibodies in plasma", "White blood cells", "Platelets"],
        correct: 0,
        hint: "A, B, or neither",
        explanation: "Blood type is determined by A and/or B antigens on red blood cells"
      },
      {
        question: "Which scientist discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"],
        correct: 0,
        hint: "1928, from mold contamination",
        explanation: "Fleming discovered penicillin from Penicillium mold"
      },
      {
        question: "What is the role of stomata in plants?",
        options: ["Gas exchange", "Water storage", "Photosynthesis", "Nutrient absorption"],
        correct: 0,
        hint: "Openings in leaves",
        explanation: "Stomata allow CO₂ in and O₂/water vapor out"
      },
      {
        question: "How many molecules of ATP are produced from one glucose in aerobic respiration?",
        options: ["About 38", "2", "10", "100"],
        correct: 0,
        hint: "Much more than anaerobic",
        explanation: "Aerobic respiration produces approximately 38 ATP per glucose"
      },
      {
        question: "What is the functional unit of the kidney?",
        options: ["Nephron", "Neuron", "Alveoli", "Villus"],
        correct: 0,
        hint: "Filters blood",
        explanation: "Nephrons filter blood and produce urine"
      },
      {
        question: "Which structure protects plant cells?",
        options: ["Cell wall", "Cell membrane", "Vacuole", "Chloroplast"],
        correct: 0,
        hint: "Made of cellulose",
        explanation: "Cell walls provide rigid support and protection"
      },
      {
        question: "What is alternative splicing?",
        options: ["Different proteins from one gene", "DNA repair", "Cell division", "Energy production"],
        correct: 0,
        hint: "Exon selection varies",
        explanation: "Alternative splicing produces different mRNA variants from one gene"
      },
      {
        question: "Which gland is called the master gland?",
        options: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
        correct: 0,
        hint: "Controls other glands",
        explanation: "Pituitary gland regulates many other endocrine glands"
      },
      {
        question: "What is the end product of protein digestion?",
        options: ["Amino acids", "Glucose", "Fatty acids", "Nucleotides"],
        correct: 0,
        hint: "Building blocks of proteins",
        explanation: "Proteins are broken down into amino acids"
      },
      {
        question: "Which process produces sex cells?",
        options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
        correct: 0,
        hint: "Halves chromosome number",
        explanation: "Meiosis produces haploid gametes (sex cells)"
      },
      {
        question: "What is the charge of the inside of a resting neuron?",
        options: ["Negative", "Positive", "Neutral", "Alternating"],
        correct: 0,
        hint: "About -70mV",
        explanation: "Resting membrane potential is negative inside (≈ -70mV)"
      },
      {
        question: "Which molecule is the energy currency of cells?",
        options: ["ATP", "DNA", "Glucose", "Oxygen"],
        correct: 0,
        hint: "Adenosine triphosphate",
        explanation: "ATP stores and transfers energy in cells"
      },
      {
        question: "What is the function of root hairs?",
        options: ["Increase absorption area", "Photosynthesis", "Support", "Reproduction"],
        correct: 0,
        hint: "Maximize surface area",
        explanation: "Root hairs increase surface area for water and mineral absorption"
      },
      {
        question: "Which organelle modifies and packages proteins?",
        options: ["Golgi apparatus", "Ribosome", "Lysosome", "Mitochondria"],
        correct: 0,
        hint: "Shipping center",
        explanation: "Golgi apparatus modifies and packages proteins for secretion"
      },
      {
        question: "What is adaptive radiation?",
        options: ["Diversification from common ancestor", "DNA mutation", "Extinction", "Migration"],
        correct: 0,
        hint: "Darwin's finches example",
        explanation: "Adaptive radiation is rapid evolution of diverse species from common ancestor"
      },
      {
        question: "Which vitamin is produced by skin when exposed to sunlight?",
        options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
        correct: 0,
        hint: "UV light required",
        explanation: "Skin synthesizes vitamin D when exposed to UV light"
      }
    ],
    2016: [
      {
        question: "What is the primary pigment in photosynthesis?",
        options: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
        correct: 0,
        hint: "Makes plants green",
        explanation: "Chlorophyll absorbs light energy for photosynthesis"
      },
      {
        question: "Which theory explains the origin of mitochondria?",
        options: ["Endosymbiotic theory", "Cell theory", "Germ theory", "Evolution theory"],
        correct: 0,
        hint: "Ancient bacteria engulfed",
        explanation: "Endosymbiotic theory: mitochondria originated from engulfed bacteria"
      },
      {
        question: "What is the function of white blood cells?",
        options: ["Fight infection", "Carry oxygen", "Clot blood", "Transport nutrients"],
        correct: 0,
        hint: "Immune system cells",
        explanation: "White blood cells (leukocytes) defend against pathogens"
      },
      {
        question: "Which macromolecule forms the cell membrane?",
        options: ["Phospholipids", "Proteins", "Carbohydrates", "Nucleic acids"],
        correct: 0,
        hint: "Lipid bilayer",
        explanation: "Phospholipids form the bilayer structure of cell membranes"
      },
      {
        question: "What is the purpose of the light-independent reactions?",
        options: ["Produce glucose", "Split water", "Generate ATP", "Release oxygen"],
        correct: 0,
        hint: "Calvin cycle",
        explanation: "Light-independent reactions (Calvin cycle) synthesize glucose from CO₂"
      },
      {
        question: "Which structure contains genetic material in prokaryotes?",
        options: ["Nucleoid", "Nucleus", "Mitochondria", "Chloroplast"],
        correct: 0,
        hint: "Not membrane-bound",
        explanation: "Prokaryotes have DNA in a nucleoid region, not a true nucleus"
      },
      {
        question: "What is the lock-and-key model?",
        options: ["Enzyme-substrate specificity", "DNA replication", "Cell signaling", "Muscle contraction"],
        correct: 0,
        hint: "Enzyme specificity",
        explanation: "Lock-and-key model explains how enzymes bind specific substrates"
      },
      {
        question: "Which stage of cell cycle involves DNA replication?",
        options: ["S phase", "G1 phase", "G2 phase", "M phase"],
        correct: 0,
        hint: "Synthesis phase",
        explanation: "S phase (synthesis) is when DNA is replicated"
      },
      {
        question: "What is the role of hemoglobin?",
        options: ["Transport oxygen", "Fight disease", "Clot blood", "Digest food"],
        correct: 0,
        hint: "Protein in red blood cells",
        explanation: "Hemoglobin binds and transports oxygen in blood"
      },
      {
        question: "Which biome has the highest biodiversity?",
        options: ["Tropical rainforest", "Desert", "Tundra", "Grassland"],
        correct: 0,
        hint: "Near equator, lots of rain",
        explanation: "Tropical rainforests have the greatest species diversity"
      },
      {
        question: "What is transpiration?",
        options: ["Water loss from leaves", "Water absorption by roots", "Glucose production", "Oxygen release"],
        correct: 0,
        hint: "Evaporation from plants",
        explanation: "Transpiration is water vapor loss through stomata"
      },
      {
        question: "Which cells produce antibodies?",
        options: ["B lymphocytes", "T lymphocytes", "Red blood cells", "Platelets"],
        correct: 0,
        hint: "B cells",
        explanation: "B lymphocytes produce antibodies against antigens"
      },
      {
        question: "What is the genetic code made of?",
        options: ["Codons", "Amino acids", "Proteins", "Chromosomes"],
        correct: 0,
        hint: "Three-nucleotide sequences",
        explanation: "Codons are triplet nucleotide sequences that specify amino acids"
      },
      {
        question: "Which process removes nitrogenous waste?",
        options: ["Excretion", "Respiration", "Digestion", "Circulation"],
        correct: 0,
        hint: "Kidneys involved",
        explanation: "Excretion eliminates metabolic wastes like urea"
      },
      {
        question: "What is the site of photosynthesis in plants?",
        options: ["Mesophyll cells", "Root cells", "Stem cells", "Guard cells"],
        correct: 0,
        hint: "In the leaf",
        explanation: "Mesophyll cells in leaves contain chloroplasts for photosynthesis"
      },
      {
        question: "Which hormone promotes cell division in plants?",
        options: ["Cytokinin", "Auxin", "Gibberellin", "Ethylene"],
        correct: 0,
        hint: "Stimulates cytokinesis",
        explanation: "Cytokinins promote cell division and shoot formation"
      },
      {
        question: "What is the function of the large central vacuole in plant cells?",
        options: ["Storage and turgor pressure", "Photosynthesis", "Protein synthesis", "DNA replication"],
        correct: 0,
        hint: "Maintains cell rigidity",
        explanation: "Central vacuoles store water and maintain turgor pressure"
      },
      {
        question: "Which structure is found in all cells?",
        options: ["Ribosomes", "Nucleus", "Chloroplasts", "Cell wall"],
        correct: 0,
        hint: "Protein factories",
        explanation: "All cells have ribosomes for protein synthesis"
      },
      {
        question: "What is biodiversity?",
        options: ["Variety of life", "Number of species", "Genetic variation", "Ecosystem diversity"],
        correct: 0,
        hint: "Encompasses all levels",
        explanation: "Biodiversity includes genetic, species, and ecosystem diversity"
      },
      {
        question: "Which process produces lactic acid in muscles?",
        options: ["Anaerobic respiration", "Aerobic respiration", "Photosynthesis", "Chemosynthesis"],
        correct: 0,
        hint: "Without oxygen",
        explanation: "Anaerobic respiration in muscles produces lactic acid during intense exercise"
      }
    ],
    2017: [
      {
        question: "What is a mutation?",
        options: ["Change in DNA sequence", "Cell division error", "Protein malfunction", "Chromosome duplication"],
        correct: 0,
        hint: "Genetic alteration",
        explanation: "Mutations are changes in the nucleotide sequence of DNA"
      },
      {
        question: "Which structure connects muscle to bone?",
        options: ["Tendon", "Ligament", "Cartilage", "Meniscus"],
        correct: 0,
        hint: "Not ligament",
        explanation: "Tendons attach muscles to bones (ligaments connect bones)"
      },
      {
        question: "What is the main function of leaves?",
        options: ["Photosynthesis", "Water storage", "Reproduction", "Nutrient absorption"],
        correct: 0,
        hint: "Light capture",
        explanation: "Leaves are the primary site of photosynthesis"
      },
      {
        question: "Which cells undergo meiosis?",
        options: ["Germ cells", "Somatic cells", "Nerve cells", "Blood cells"],
        correct: 0,
        hint: "Sex cells",
        explanation: "Germ cells undergo meiosis to produce gametes"
      },
      {
        question: "What is the Hardy-Weinberg principle?",
        options: ["Allele frequency stability", "Natural selection", "Genetic drift", "Mutation rate"],
        correct: 0,
        hint: "Equilibrium in populations",
        explanation: "Hardy-Weinberg describes stable allele frequencies in ideal populations"
      },
      {
        question: "Which organ produces bile?",
        options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        correct: 0,
        hint: "Stored in gallbladder",
        explanation: "Liver produces bile for fat digestion"
      },
      {
        question: "What is the role of tRNA in translation?",
        options: ["Bring amino acids to ribosome", "Carry genetic code", "Form ribosome structure", "Splice introns"],
        correct: 0,
        hint: "Transfer RNA",
        explanation: "tRNA transports amino acids to ribosomes during protein synthesis"
      },
      {
        question: "Which molecules enter the Krebs cycle?",
        options: ["Acetyl CoA", "Glucose", "Pyruvate", "Lactate"],
        correct: 0,
        hint: "From pyruvate oxidation",
        explanation: "Acetyl CoA enters the Krebs cycle (citric acid cycle)"
      },
      {
        question: "What is osmoregulation?",
        options: ["Water balance control", "Temperature regulation", "pH balance", "Glucose regulation"],
        correct: 0,
        hint: "Osmotic pressure management",
        explanation: "Osmoregulation maintains proper water and solute balance"
      },
      {
        question: "Which part of the brain controls balance?",
        options: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
        correct: 0,
        hint: "Coordination center",
        explanation: "Cerebellum coordinates movement and balance"
      },
      {
        question: "What is the function of plasmodesmata?",
        options: ["Cell-to-cell communication", "Photosynthesis", "Water transport", "Structural support"],
        correct: 0,
        hint: "Plant cell connections",
        explanation: "Plasmodesmata are channels connecting plant cells for transport"
      },
      {
        question: "Which immune response is faster?",
        options: ["Innate immunity", "Adaptive immunity", "Humoral immunity", "Cell-mediated immunity"],
        correct: 0,
        hint: "Non-specific defense",
        explanation: "Innate immunity provides immediate, non-specific defense"
      },
      {
        question: "What is eutrophication?",
        options: ["Excessive nutrient enrichment", "Ocean acidification", "Desertification", "Deforestation"],
        correct: 0,
        hint: "Algal blooms",
        explanation: "Eutrophication is nutrient over-enrichment causing algal blooms"
      },
      {
        question: "Which molecule is the direct energy source for muscle contraction?",
        options: ["ATP", "Glucose", "Glycogen", "Creatine phosphate"],
        correct: 0,
        hint: "Immediate energy",
        explanation: "ATP provides immediate energy for muscle contraction"
      },
      {
        question: "What is apoptosis?",
        options: ["Programmed cell death", "Uncontrolled cell growth", "Cell division", "Cell differentiation"],
        correct: 0,
        hint: "Controlled death",
        explanation: "Apoptosis is programmed, controlled cell death"
      },
      {
        question: "Which enzyme adds nucleotides during DNA replication?",
        options: ["DNA polymerase", "Helicase", "Ligase", "Primase"],
        correct: 0,
        hint: "Builds new strand",
        explanation: "DNA polymerase synthesizes new DNA strands"
      },
      {
        question: "What is the biological species concept?",
        options: ["Interbreeding populations", "Morphological similarity", "Genetic similarity", "Ecological niche"],
        correct: 0,
        hint: "Reproductive isolation",
        explanation: "Species are groups capable of interbreeding and producing fertile offspring"
      },
      {
        question: "Which process converts nitrogen gas to ammonia?",
        options: ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        correct: 0,
        hint: "Bacteria in root nodules",
        explanation: "Nitrogen fixation converts N₂ to NH₃ by bacteria"
      },
      {
        question: "What is the function of the smooth endoplasmic reticulum?",
        options: ["Lipid synthesis", "Protein synthesis", "ATP production", "DNA storage"],
        correct: 0,
        hint: "No ribosomes attached",
        explanation: "Smooth ER synthesizes lipids and detoxifies substances"
      },
      {
        question: "Which structure controls cell activities?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correct: 0,
        hint: "Contains DNA",
        explanation: "Nucleus contains DNA and controls cellular activities"
      }
    ]
  },

  CHEMISTRY: {
    2013: Array.from({length: 20}, (_, i) => ({
      question: `Chemistry 2013 - Question ${i + 1}: ${['What is the atomic number of Carbon?', 'What is the formula for water?', 'What is Avogadro\'s number?', 'What is the pH of a neutral solution?', 'What type of bond shares electrons?', 'What is the molar mass of H₂O?', 'Which element has symbol Na?', 'What is the charge of a proton?', 'What is oxidation?', 'What gas is produced when acids react with metals?', 'What is the electron configuration of Oxygen?', 'What is a catalyst?', 'What is the unit of concentration?', 'Which group contains noble gases?', 'What is an isotope?', 'What is the formula for methane?', 'What state is Br₂ at room temperature?', 'What is electronegativity?', 'What is Le Chatelier\'s principle?', 'What is the ideal gas law?'][i]}`,
      options: i === 0 ? ['6', '12', '8', '14'] : i === 1 ? ['H₂O', 'CO₂', 'O₂', 'H₂O₂'] : i === 2 ? ['6.02 × 10²³', '3.14 × 10²³', '1.00 × 10²⁴', '2.00 × 10²³'] : i === 3 ? ['7', '14', '0', '1'] : i === 4 ? ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'] : [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: 0
    })),
    2014: Array.from({length: 20}, (_, i) => ({
      question: `Chemistry 2014 - Question ${i + 1}: ${['What is the formula for sulfuric acid?', 'What is a limiting reactant?', 'What is molarity?', 'What does STP stand for?', 'What is a precipitate?', 'Which element is most electronegative?', 'What is the oxidation state of Fe in Fe₂O₃?', 'What is enthalpy?', 'What is a redox reaction?', 'What is Hess\'s Law?', 'What is activation energy?', 'What is an exothermic reaction?', 'What is the formula for ammonia?', 'What is the Aufbau principle?', 'What is bond polarity?', 'What is a buffer solution?', 'What is specific heat?', 'What is a saturated solution?', 'What is the first law of thermodynamics?', 'What is entropy?'][i]}`,
      options: i === 0 ? ['H₂SO₄', 'HCl', 'HNO₃', 'H₃PO₄'] : [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: 0
    })),
    2015: Array.from({length: 20}, (_, i) => ({
      question: `Chemistry 2015 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2016: Array.from({length: 20}, (_, i) => ({
      question: `Chemistry 2016 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2017: Array.from({length: 20}, (_, i) => ({
      question: `Chemistry 2017 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    }))
  },

  SAT: {
    2013: Array.from({length: 20}, (_, i) => ({
      question: `SAT 2013 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2014: Array.from({length: 20}, (_, i) => ({
      question: `SAT 2014 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2015: Array.from({length: 20}, (_, i) => ({
      question: `SAT 2015 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2016: Array.from({length: 20}, (_, i) => ({
      question: `SAT 2016 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2017: Array.from({length: 20}, (_, i) => ({
      question: `SAT 2017 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    }))
  },

  PHYSICS: {
    2013: Array.from({length: 20}, (_, i) => ({
      question: `Physics 2013 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2014: Array.from({length: 20}, (_, i) => ({
      question: `Physics 2014 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2015: Array.from({length: 20}, (_, i) => ({
      question: `Physics 2015 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2016: Array.from({length: 20}, (_, i) => ({
      question: `Physics 2016 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    })),
    2017: Array.from({length: 20}, (_, i) => ({
      question: `Physics 2017 - Question ${i + 1}`,
      options: [`Option A for question ${i + 1}`, `Option B for question ${i + 1}`, `Option C for question ${i + 1}`, `Option D for question ${i + 1}`],
      correct: Math.floor(Math.random() * 4)
    }))
  }
};

// Make question bank globally available
if (typeof window !== 'undefined') {
  window.QUESTION_BANK = QUESTION_BANK;
}
