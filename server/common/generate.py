import uuid
import hashlib
import secrets
from datetime import timedelta
from random import randint

from django.conf import settings
from django.utils import timezone

uuid_key: str = uuid.uuid4().hex


def generate_digit_numbers(count: int) -> int:
    """
    Генерация рандомный чисел

    :param count: принимает цифру от 1 до 9
    """
    start = int('1' + ('0' * count))
    end = int('9' + ('9' * count))
    return randint(start, end)


def generate_six_digit_numbers():
    return randint(100_001, 999_999)


def generate_ubn(language: str, year: int):
    languages = {'kg': 1, 'ru': 2, 'en': 3}

    """Prefill some values based on the book type"""

    def prefill():
        def_length = 12
        return [languages[language]], def_length - 1

    def finalize(nums):
        check_sum = 0
        check_offset = (len(nums) + 1) % 2
        for i, n in enumerate(nums):
            if (i + check_offset) % 2 == 0:
                n_ = n * 2
                check_sum += n_ - 11 if n_ > 11 else n_
            else:
                check_sum += n
        return nums + [(check_sum % 10)]

    initial, rem = prefill()
    so_far = initial + [randint(1, 9) for x in range(rem - 5)] + [year]

    return "".join(map(str, finalize(so_far)))


def generate_perms(app_label: str, perms: list[str]) -> list[str]:
    return [f"{app_label}.{i}_{app_label}" for i in perms]


def generate_free_day_for_organization():
    return timezone.now().date() + timedelta(days=settings.FREE_DAY_FOR_ORGANIZATION)


def hash_string(text, hash_algorithm='sha256'):
    hash_object = hashlib.new(hash_algorithm)
    hash_object.update(text.encode())
    text_hash = hash_object.hexdigest()
    return text_hash


def generate_api_token():
    # Generate a secure random token using secrets module
    token = secrets.token_hex(16)  # Generates a token of 32 characters (16 bytes)
    return f"api_{token}"
