# Payment and Transaction Management API

This project is a Django-based API for managing payments and balance transactions for organizations. The API supports filtering by date, status, and amount, and automatically updates organization balances based on transaction status.

## Features

- Create and manage organizations
- Create and manage payments
- Automatically create and manage balance transaction history
- Filter payments and transactions by date, status, and amount

## Installation

### Prerequisites

- Python 3.12 or higher
- Poetry

### Steps

1. **Clone the repository:**

    ```sh
    git clone git@github.com:DaProWebStudio/online-payment-system.git
    cd <server>
    ```

2. **Install dependencies using Poetry:**

    ```sh
    poetry install
    ```

3. **Create a `.env` file in the project root and add the necessary environment variables:**

    ```env
    DEBUG=True
    SECRET_KEY=your_secret_key
    ALLOWED_HOSTS=127.0.0.1,0.0.0.0,192.168.0.171
    ```

4. **Apply migrations:**

    ```sh
    poetry run python manage.py migrate
    ```

5. **Create a superuser:**

    ```sh
    poetry run python manage.py createsuperuser
    ```

6. **Run the development server:**

    ```sh
    poetry run python manage.py runserver
    ```

## Usage

### Admin Panel

The Django admin panel is available at `http://127.0.0.1:8000/admin/`. You can manage organizations, payments, and balance transaction history through this interface.

### API Endpoints

The following endpoints are available:

- `GET /api/organizations/` - List all organizations
- `POST /api/organizations/` - Create a new organization
- `GET /api/payments/` - List all payments with filtering options
- `POST /api/payments/` - Create a new payment
- `GET /api/transactions/` - List all balance transactions with filtering options
- `POST /api/transactions/` - Create a new balance transaction

### Filtering

You can filter payments and transactions by date, status, and amount using query parameters. Examples:

- Filter payments by status: `GET /api/payments/?status=completed`
- Filter payments by date range: `GET /api/payments/?created_at_after=2023-01-01&created_at_before=2023-12-31`
- Filter payments by amount range: `GET /api/payments/?amount_min=100&amount_max=500`

## Configuration

### Django Settings

Environment variables are used to configure the Django settings. These variables should be defined in a `.env` file in the project root.

### Poetry
