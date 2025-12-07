#!/usr/bin/env python3
"""Annotate the function's parameters and return values with the appropriate
types.
"""

import typing


def element_length(
    lst: typing.Iterable[typing.Sequence]
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """Returns a list of tuples containing each element and its length."""
    return [(i, len(i)) for i in lst]
