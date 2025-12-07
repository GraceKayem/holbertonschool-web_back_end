#!/usr/bin/env python3
"""Write a type-annotated function make_multiplier that takes a float multiplier
as argument and returns a function that multiplies a float by the multiplier.
"""

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Returns a function that multiplies a float by the multiplier."""
    def multiplier_func(x: float) -> float:
        return x * multiplier
    return multiplier_func
