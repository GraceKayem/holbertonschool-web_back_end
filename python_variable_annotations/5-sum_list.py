#!/usr/bin/env python3
"""Write a type-annotated function sum_list which takes a list of floats as
argument and returns their sum as a float.
"""

import math
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """Returns the sum of a list of floats as a float."""
    return math.fsum(input_list)
